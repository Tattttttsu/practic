import React, {useEffect, useState} from 'react';
import {TitleSC} from "../UI/TitleSC";
import {Button, CircularProgress, styled, useMediaQuery} from "@mui/material";
import {useParams} from "react-router-dom";
import {ITestModel} from "../lib/models/ITestModel";
import PageTest from "./PageTest/PageTest";
import {IInfoModel} from "../lib/models/IInfoModel";
import InfoData from "./InfoData/InfoData";
import TasksData from "./TasksData/TasksData";
import Video from "./Video/Video";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Aside from "./Aside/Aside";
import {COLORS} from "../lib/constants/constants";

type StateType = {info: IInfoModel[], tasks: string[], test: ITestModel | null, result: string, video: string  }

const DynamicPage = () => {
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const isTablet = useMediaQuery("(max-width: 768px)")
    const [data, setData] = useState<StateType>({info: [], tasks: [], result: "", video: "", test: null})

    useEffect(() => {
        if (id) {
            fetch(`/jsons/${id}.json`).then((r) => r.json()).then(r => {
                setData(r)
                setIsLoading(false);
            })
        }
    }, [id])


    return (
        <>
            <ContainerSC id="content">
                {isLoading && <LoadingContainer>
                    <CircularProgress/>
                </LoadingContainer>}
                {!isLoading && (
                    <>
                        <div>
                            <Button variant="outlined" href="/"><ArrowBackIcon/>&nbsp;&nbsp;Назад</Button>
                        </div>
                        <InfoData info={data.info}/>
                        <Video video={data.video}/>
                        <TasksData data={data.tasks} result={data.result} />
                        {data.test && (
                            <PageTest {...data.test}/>
                        )}
                        <div>
                            <Button variant="outlined" href="/"><ArrowBackIcon/>&nbsp;&nbsp;Назад</Button>
                        </div>
                    </>
                )}
            </ContainerSC>
            {!isLoading && !isTablet && (
                <Aside/>
            )}
        </>
    );
};

const ContainerSC = styled("section")`
  padding: 15px;
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  min-height: calc(100vh - 40px);
  border-radius: 10px;
  background-color: ${COLORS.BACKGROUND_COLOR_TWO};
  display: flex;
  flex-direction: column;
`;

const LoadingContainer = styled("div")`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export default DynamicPage;
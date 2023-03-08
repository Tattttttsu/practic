import React, {useEffect, useState} from 'react';
import {TitleSC} from "../UI/TitleSC";
import {Button, styled} from "@mui/material";
import {useParams} from "react-router-dom";
import {ITestModel} from "../lib/models/ITestModel";
import PageTest from "./PageTest/PageTest";
import {IInfoModel} from "../lib/models/IInfoModel";
import InfoData from "./InfoData/InfoData";
import TasksData from "./TasksData/TasksData";
import Video from "./Video/Video";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type StateType = {info: IInfoModel[], tasks: string[], test: ITestModel | null, result: string, video: string  }

const DynamicPage = () => {
    const [data, setData] = useState<StateType>({info: [], tasks: [], result: "", video: "", test: null})
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            fetch(`/jsons/${id}.json`).then((r) => r.json()).then(r => {
                setData(r)
            })
        }
    }, [id])


    return (
        <ContainerSC>
            <Button variant="outlined" href="/"><ArrowBackIcon/>&nbsp;&nbsp;Назад</Button>
            <InfoData info={data.info}/>
            <Video video={data.video}/>
            <TasksData data={data.tasks} result={data.result} />
            {data.test && (
                <PageTest {...data.test}/>
            )}
            <Button variant="outlined" href="/"><ArrowBackIcon/>&nbsp;&nbsp;Назад</Button>
        </ContainerSC>
    );
};

const ContainerSC = styled("section")`
  padding: 15px;
`;

export default DynamicPage;
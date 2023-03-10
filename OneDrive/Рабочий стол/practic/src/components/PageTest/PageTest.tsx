import React, {useEffect, useState} from 'react';
import {ITestModel} from "../../lib/models/ITestModel";
import {Button, styled} from "@mui/material";
import {useForm, FormProvider} from "react-hook-form";
import Testitem from "./Testitem/Testitem";
import TestSwiper from "./TestSwiper/TestSwiper";
import {useParams} from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

type StateType = {reslut: boolean, count:number}

const PageTest = ({head, body}:  ITestModel) => {
    const methods = useForm();
    const {handleSubmit} = methods
    const [pageResult, setPageResult] = useState<StateType | null>(null)
    const { id } = useParams();

    const onSubmit = handleSubmit((data) => {
        let successCount = 0;
        for (const [_, value] of Object.entries(data)) {
            if (value.result) successCount += 1;
        }

        const result = {count: successCount, reslut: successCount >= Math.ceil(Object.keys(data).length / 2)}
        setPageResult(result);
        localStorage.setItem(`${id}`, JSON.stringify(result))
    })

    const handleRest = () => {
        setPageResult(null);
        methods.reset({});
        localStorage.removeItem(`${id}`);
    }

    useEffect(() => {
        const data = localStorage.getItem(`${id}`);
        if (data) {
            setPageResult(JSON.parse(data))
        }
    }, [])



    return (
        <ContainerSC>
            <TitleSC>{head}</TitleSC>
            {!pageResult && (
                <FormProvider {...methods}>
                    <form onSubmit={onSubmit}>
                        <TestSwiper body={body} />
                    </form>
                </FormProvider>
            )}
            {pageResult && (
                <ResultContainerSC>
                    <IconContainerSC>
                        {pageResult.reslut ? <CheckCircleIcon/> : <ErrorIcon/>}
                    </IconContainerSC>
                    <TitleResultSC>{pageResult.reslut ? "Вы успешно прошли тест" : "К сожалению вы не прошли тест. Перечитайте материал статьи"} тест</TitleResultSC>
                    <TitleResultSC>Количество набранных баллов {pageResult.count} из {body.length}</TitleResultSC>
                    <Button variant="contained" onClick={handleRest}>Пройти заново</Button>
                </ResultContainerSC>
            )}
        </ContainerSC>
    );
};

const ContainerSC = styled("div")`
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
`

const TitleSC = styled("h2")`
  margin-bottom: 20px;
`

const ResultContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainerSC = styled("div")`
    & > svg {
      width: 100px;
      height: 100px;
    }
  margin-bottom: 15px;
`

const TitleResultSC = styled("h4")`
  margin-bottom: 15px;
  max-width: 300px;
  text-align: center;
`

export default PageTest;
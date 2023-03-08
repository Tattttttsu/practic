import React from 'react';
import {SwiperSlide} from "swiper/react";
import {ITestItemModel} from "../../../lib/models/ITestModel";
import {Button, FormLabel, RadioGroup, styled, useControlled} from "@mui/material";
import SelectItem from "./SelectItem";
import {useController, useFormContext} from "react-hook-form";

interface ITestitemProps extends ITestItemModel {
    index: number;
    handleSwiperNext: () => void
    handleSwiperPrev: () => void
}

const Testitem = ({title, content, index, handleSwiperNext, handleSwiperPrev}: ITestitemProps)=> {
    const {control} = useFormContext();
    const {field} = useController({control, name: `${index}`, rules: {required: true}})

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        field.onChange(JSON.parse(e.target.value))
        setTimeout(() => {
            handleSwiperNext();
        }, 100)
    }

    return (
        <ContainerSC>
            <FormLabelSC id="demo-radio-buttons-group-label">{`${index}. ${title}`}</FormLabelSC>
            <RadioGroupSC
                value={field.value?.title }
                onChange={onChange}
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {content.map((contentItem, index) => (
                    <SelectItem {...contentItem} index={index + 1}/>
                ))}
            </RadioGroupSC>
            {field.value && (
                <div>
                    <Button style={{marginBottom: "15px"}} variant="contained" onClick={handleSwiperNext}>ДАЛЬШЕ</Button>
                </div>
            )}
            {index > 1 && (
                <div>
                    <Button variant="contained" onClick={handleSwiperPrev}>НАЗАД</Button>
                </div>
            )}
        </ContainerSC>
    );
};

const ContainerSC = styled("div")`
  min-height: 300px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormLabelSC = styled(FormLabel)`
  color: white;
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
`

const RadioGroupSC = styled(RadioGroup)`
  padding-left: 10px;
  margin-bottom: 20px;
`


export default Testitem;
import React from 'react';
import {ITestSubItemModel} from "../../../lib/models/ITestModel";
import {FormControlLabel, Radio, styled} from "@mui/material";
import {useFormContext} from "react-hook-form";

interface ISelectItemProps extends ITestSubItemModel {
    index: number
}
const SelectItem = ({index, title, result}: ISelectItemProps) => {
    return (
        <FormControlLabel value={JSON.stringify({title, result})} control={<RadioSC color="success" />} label={title} />
    );
};

const RadioSC = styled(Radio)`
  color: white;
`;



export default SelectItem;
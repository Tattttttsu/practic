import React from 'react';
import {IInfoModel} from "../../lib/models/IInfoModel";
import InfoItem from "./InfoItem/InfoItem";

interface IInfoDataProps {
    info: IInfoModel[]
}
const InfoData = ({info}: IInfoDataProps) => {
    console.log(info);
    return (
        <>
            {info.map((infoItem, index) => (
                <InfoItem key={index + infoItem.type} {...infoItem}/>
            ))}
        </>
    );
};

export default React.memo(InfoData);
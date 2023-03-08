import React, {useMemo} from 'react';
import {IInfoModel} from "../../../lib/models/IInfoModel";
import {styled} from "@mui/material";

const InfoItem = ({type, content}: IInfoModel) => {
    const isImg = useMemo(() => type === "img", [type]);

    return isImg ? (
        <img src={`/images/${content}`} alt={content}/>
    ) : (
        <ContentSC as={type}>
            {content}
        </ContentSC>
    );
};

const ContentSC = styled("div")``;

export default React.memo(InfoItem);
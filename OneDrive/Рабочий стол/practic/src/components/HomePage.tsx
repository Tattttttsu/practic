import React from 'react';
import {TitleSC} from "../UI/TitleSC";
import {Button, styled} from "@mui/material";
import {BUTTONS_ARRAY, COLORS, IMAGE_PATH_NAME, PROFESSION} from "../lib/constants/constants";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigation = useNavigate();
    const image = `/images/${IMAGE_PATH_NAME}`
    return (
        <ContainerSC>
            <InfoContainerSC style={{backgroundImage: "url(" + image + ")"}}>
                <CustomTitleSC>{PROFESSION}</CustomTitleSC>
                <BackdoorSC/>
            </InfoContainerSC>
            <ButtonContainerSC>
                {BUTTONS_ARRAY.map((buttonItem) => (
                    <ButtonStyle>
                        <Button fullWidth variant="contained" onClick={() => navigation(`/${buttonItem.path}`)}>{buttonItem.title}</Button>
                    </ButtonStyle>
                ))}
            </ButtonContainerSC>
        </ContainerSC>
    )
};

const ContainerSC = styled("main")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const InfoContainerSC = styled("section")`
  padding: 10px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  position: relative;
  background-position: center;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  & > *:last-child {
    margin-bottom: 0px;
  }
`;

const ButtonStyle = styled("div")`
  width: 100%;
  margin-bottom: 10px;
`;

const CustomTitleSC = styled(TitleSC)`
  position: relative;
  z-index: 1;
  color: ${COLORS.TEXT_COLOR} !important;
`;

const BackdoorSC = styled("div")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.BACKDOOR_COLOR};\
`;

export default HomePage;
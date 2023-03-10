import React, {useEffect, useState} from 'react';
import {COLORS} from "../../lib/constants/constants";
import {Button, CircularProgress, styled} from "@mui/material";

export interface IAsideItem {
    title: string;
    offsetTop: number;
}
const Aside = () => {
    const [data, setData] = useState<IAsideItem[]>([]);

    useEffect(() => {
       setTimeout(() => {
           const container = document.querySelector("#content") as HTMLDivElement
           if (container) {
               const h1Array = container.querySelectorAll("h1");
               if (h1Array) {
                   const array: IAsideItem[] = []
                   h1Array.forEach((h1Item) => {
                       if (h1Item) {
                           array.push({
                               title: h1Item?.textContent || "",
                               offsetTop: h1Item.offsetTop,
                           })
                       }
                   })

                   setData(array)
               }
           }
       }, 1500)
    }, [])


    return (
        <ContainerSC>
            <WrapperSC>
                {!data.length && <CircularProgress/>}
                {data.map((dataItem) => (
                    <ItemSC>
                        <Button fullWidth onClick={() => window.scrollTo({top: dataItem.offsetTop - 20, behavior: "smooth"})} variant="outlined">
                            {dataItem.title}
                        </Button>
                    </ItemSC>
                ))}
                {!!data.length && (
                    <ItemSC>
                        <Button fullWidth onClick={() => window.scrollTo({top: 10000, behavior: "smooth"})} variant="outlined">
                            Тест
                        </Button>
                    </ItemSC>
                )}
            </WrapperSC>
        </ContainerSC>
    );
};

const ContainerSC = styled("div")`
  margin: 0 10px;
`;

const WrapperSC = styled("div")`
  position: sticky;
  top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${COLORS.BACKGROUND_COLOR_TWO};
  & > *:last-child {
    margin-bottom: 0;
  }
`

const ItemSC = styled("div")`
  margin-bottom: 15px;
`;

export default React.memo(Aside);
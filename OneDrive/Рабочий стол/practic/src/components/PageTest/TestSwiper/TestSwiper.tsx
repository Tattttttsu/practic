import React, {useRef} from 'react';
import {ITestModel} from "../../../lib/models/ITestModel";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Testitem from "../Testitem/Testitem";
import {Pagination} from "swiper";
import {Button, styled} from "@mui/material";

const TestSwiper = ({body}: Pick<ITestModel, "body">) => {
    const ref = useRef<SwiperRef>(null);

    const handleSwiperNext = () => {
        ref.current?.swiper.slideNext(500);
    }

    const handleSwiperPrev = () => {
        ref.current?.swiper.slidePrev(500);
    }

    return (
        <Swiper
            ref={ref}
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove={false}
            noSwiping={true}
        >
            {body.map((bodyItem, index) => (
                <SwiperSlide key={bodyItem.title}>

                    <Testitem {...bodyItem} index={index + 1} handleSwiperNext={handleSwiperNext} handleSwiperPrev={handleSwiperPrev}/>
                </SwiperSlide>
            ))}
            <SwiperSlide>
                <ContainerSC>
                    <Button variant="contained" type="submit">Показать результат</Button>
                    <div style={{marginTop: "10px"}}>
                        <Button variant="contained" fullWidth onClick={handleSwiperPrev}>Назад</Button>
                    </div>
                </ContainerSC>
            </SwiperSlide>
        </Swiper>
    );
};


const ContainerSC = styled("div")`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default TestSwiper;
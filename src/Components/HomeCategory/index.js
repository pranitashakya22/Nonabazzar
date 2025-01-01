import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from '../../images/teaIcon.png';


const HomeCat =()=>{
    return(
        <section className="homeCat">
            <div className="container">
               <h2 className="mb-3 hd">FEATURED CATEGORIES</h2>
            <Swiper
                      spaceBetween={5}
                      slidesPerView={10}
                      navigation={true}
                      slidesPerGroup={1}
                      modules={[Navigation]}
                      className="mySwiper"
                    >
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
                        <SwiperSlide>
                           <div className="item text-center">
                            <img src={Image}/>
                            <h6>Tea</h6>
                           </div>
                        </SwiperSlide>
            </Swiper>
            </div>
        </section>

    )
}

export default HomeCat;
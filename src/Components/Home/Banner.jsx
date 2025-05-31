import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="w-full ">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/L2jMKJp/1.jpg" 
                        alt="Slide 1" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/jZ3CXcTD/2.jpg" 
                        alt="Slide 2" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/hJpvyHfj/3.jpg" 
                        alt="Slide 3" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/NnkgFzrv/4.jpg" 
                        alt="Slide 4" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/svJBKysW/5.jpg" 
                        alt="Slide 5" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/8Lv91GTJ/6.jpg" 
                        alt="Slide 6" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/MkfDgQPf/7.jpg" 
                        alt="Slide 7" 
                        className="w-full h-screen object-cover" 
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img 
                        src="https://i.ibb.co.com/tTWs0ZFQ/8.png" 
                        alt="Slide 8" 
                        className="w-full min-h-screen object-cover" 
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
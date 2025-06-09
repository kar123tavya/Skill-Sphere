import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '.././assets/noticeimg.png';
import img2 from '.././assets/noticeimg.png';

import { Autoplay,EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
function ImageSlider() {
    return (
        <div className="container" style={{ width: '900px' }}>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={10}
                slidesPerView={2}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    slideShadows: false,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={img1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="slide_image" />
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">

                    </div>
                    <div className="swiper-button-next slider-arrow">

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default ImageSlider;
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { HeroWrapper } from "./Hero.style";


export default function Hero() {

    return (
        <HeroWrapper>
            <div className="containerCarts">
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView="auto"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                }}
                spaceBetween={50}
                loop={true}
                navigation={true}
                modules={[EffectCoverflow, Navigation, Autoplay]}
            >
                <SwiperSlide>
                    <img src="src/assets/img/1.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/2.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/3.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/4.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/5.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/6.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/7.jpg" alt="movie" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src/assets/img/8.jpg" alt="movie" />
                </SwiperSlide>
            </Swiper>
            </div>
        </HeroWrapper>
    )
}
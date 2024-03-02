import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import { HeroWrapper } from "./Hero.style";
import { useState } from "react";

// importar json de prueba
import data from '../../../json/hero.json';
import CardMovie from "../../pure/CardMovie";


export default function Hero() {
    const [dataJson] = useState(data);

    return (
        <HeroWrapper>
            <div className="containerCarts">
                <Swiper
                    effect={'coverflow'}
                    centeredSlides={true}
                    slidesPerView="auto"
                    autoplay={{
                        delay: 4500,
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
                    navigation
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                >
                    {dataJson.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardMovie img={item.image} alt={item.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </HeroWrapper>
    )
}
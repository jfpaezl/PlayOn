import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HeroWrapper } from "./Hero.style";

// import required modules
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

// import components
import CardMovie from "../../pure/CardMovie";

// importar json de prueba
import data from '../../../json/home/hero.json';



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
                    spaceBetween={64}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Navigation, Autoplay]}
                >
                    {dataJson.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardMovie img={item.image} alt={item.title} />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next">
                        <GrNext className='iconPagination' />
                    </div>
                    <div className="swiper-button-prev">
                        <GrPrevious className='iconPagination' />
                    </div>
                </Swiper>
            </div>
        </HeroWrapper>
    )
}
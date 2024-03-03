import PropTypes from 'prop-types';
import { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';

import { ListContentCss } from "./ListContent.style";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, HashNavigation } from 'swiper/modules';

import CardContent from '../../../pure/CardContent';

import data from '../../../../json/hero.json'


interface ListContentProps {
    listName: string;
}

export default function ListContent({ listName }: ListContentProps) {

    const [listContent] = useState(data)
    return (
        <ListContentCss>
            <h2>{listName}</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    hashNavigation={{
                        watchState: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1400: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation, HashNavigation]}
                    className="mySwiper"
                >
                    {listContent.map((item, index) => (
                        <SwiperSlide key={index}>
                            <CardContent img={item.image} alt={item.title} />
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next">
                        <GrNext className='iconPagination'/>
                    </div>
                    <div className="swiper-button-prev">
                        <GrPrevious className='iconPagination'/>
                    </div>
                </Swiper>
            </div>
        </ListContentCss>
    )
}

ListContent.prototype = {
    listName: PropTypes.string.isRequired
}
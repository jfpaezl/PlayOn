import PropTypes from 'prop-types';
import { useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from 'swiper/react';

import CardContent from '../../../pure/CardContent';
import { ListContentCss } from "./ListContent.style";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation, HashNavigation } from 'swiper/modules';



interface ListContentProps {
    listName: string;
    data: {
        image: string;
        title: string;
    }[];
    top?: boolean;
}

export default function ListContent({ listName, data, top = false}: ListContentProps) {

    const [listContent] = useState(data)
    const [indice] = useState(top)
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
                            spaceBetween: 30,
                        },
                        1400: {
                            slidesPerView: 6,
                            spaceBetween: 30,
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
                            {
                                indice? 
                                <CardContent img={item.image} alt={item.title} ind={index+1}/> : 
                                <CardContent img={item.image} alt={item.title}/> 
                            }
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
    listName: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    top: PropTypes.bool
}
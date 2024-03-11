import PropTypes from 'prop-types';
import { useState } from "react";
import { RecomendedCss } from "./Recomendede.style";
import { FaBookmark, FaHeart } from 'react-icons/fa';

interface RecomendedProps {
    data:{
        id: number;
        alt: string;
        img: string;
    }[]
}

export default function Recomended ({data}: RecomendedProps) {

    const [images] = useState(data)

    return (
        <RecomendedCss>
            <div className="messaje">
                <strong className="title">Peliculas para ver de noche</strong>
                <div className='contendButtons'>
                    <button className='button'>{<FaHeart className="icon"/>}Favoritos</button>
                    <button className='button'>{<FaBookmark className="icon"/>}Mi Lista</button>
                </div>
            </div>
            <div className="imgreference">
                {images.map((item) => (
                    <img key={item.id} src={item.img} alt={item.alt}/>
                ))}
            </div>
        </RecomendedCss>
    )
}

Recomended.prototype = {
    data: PropTypes.array.isRequired
}
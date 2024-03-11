import PropTypes from 'prop-types';
import { CardContentCss } from './CardContent.style';

interface CardMovieProps {
    img: string;
    alt: string;
    ind?: number;
}


export default function CardContent({ img, alt , ind}: CardMovieProps) {
    return (
        <CardContentCss>
            <img src={img} alt={alt} />
            <span className='top'>{ind}</span>
        </CardContentCss>
    )
}

CardContent.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    ind: PropTypes.number
}
import PropTypes from 'prop-types';
import { CardContentCss } from './CardContent.style';

interface CardMovieProps {
    img: string;
    alt: string;
}


export default function CardContent({ img, alt }: CardMovieProps) {
    return (
        <CardContentCss>
            <img src={img} alt={alt} />
        </CardContentCss>
    )
}

CardContent.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
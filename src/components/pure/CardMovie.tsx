import PropTypes from 'prop-types';
import { CardMovieCss } from './CardMovie.style';


/**Es la base para guardar las caratulas de las peliculas o series */

interface CardMovieProps {
    img: string;
    alt: string;
}

const CardMovie =( {img, alt} : CardMovieProps) =>{
    return (
        <CardMovieCss>
            <img src={img} alt={alt} />
        </CardMovieCss>
    );
}

CardMovie.propTypes = {
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default CardMovie;
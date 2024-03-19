import { NewLiveCss } from "./NewLive.style";
import proptype from "prop-types";

import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface NewLiveProps {
    url: string;
    title: string;
}

export default function NewLive({ url, title }: NewLiveProps) {
    return (
        <NewLiveCss>
            <img src={url} alt={title} />
            <Link to="">
                <div className="action">
                    <strong>Nuevo</strong>
                    <FaRegCirclePlay />
                </div>
            </Link>
        </NewLiveCss>
    );
}

NewLive.propTypes = {
    url: proptype.string.isRequired,
    title: proptype.string.isRequired,
};
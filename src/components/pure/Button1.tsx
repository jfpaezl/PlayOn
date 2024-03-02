import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'

import { Button1Css } from "./Button1.style";

interface Button1Props {
    children: React.ReactNode;
    icon?: React.ReactNode;
    url: string;
}
export default function Button1({children, icon, url}: Button1Props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
      };

    return (
        <Button1Css onClick={handleClick} >
            {icon}
            {children}
        </Button1Css>
    );
}

Button1.propTypes = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.node,
    url: PropTypes.string
}
import PropTypes from 'prop-types';
import { ButtonAppsCss } from "./ButtonApps.style";

interface ButtonAppsProps {
    children: JSX.Element;
    icon: JSX.Element;
    onClick: () => void;
}

export default function ButtonApps({children, icon, onClick}: ButtonAppsProps) {
    return (
        <ButtonAppsCss onClick={onClick}>
            <>
            {icon}
            {children}
            </>
        </ButtonAppsCss>
    )
}

ButtonApps.prototype = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    onclick: PropTypes.func.isRequired
}
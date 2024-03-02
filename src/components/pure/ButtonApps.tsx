import PropTypes from 'prop-types';
import { ButtonAppsCss } from "./ButtonApps.style";

interface ButtonAppsProps {
    children: JSX.Element;
    icon: JSX.Element;
}

export default function ButtonApps({children, icon}: ButtonAppsProps) {
    return (
        <ButtonAppsCss>
            <>
            {icon}
            {children}
            </>
        </ButtonAppsCss>
    )
}

ButtonApps.prototype = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired
}
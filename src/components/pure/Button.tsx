import proptype from "prop-types";
import { ButtonCss } from "./Button.style";

interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <ButtonCss>
            {children}
        </ButtonCss>
    );
}

Button.propTypes = {
    children: proptype.node.isRequired,
};
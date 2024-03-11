import { ButtonSliderCss } from "./ButtonSlider.style";

interface ButtonSliderProps {
    children: JSX.Element;
    icon: JSX.Element;
}

export default function ButtonSlider({ children, icon }: ButtonSliderProps) {
    return (
    <ButtonSliderCss>
        {icon}
        {children}
    </ButtonSliderCss>
    )
}
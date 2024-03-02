import { styled } from "styled-components";

export const Button1Css = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: .5rem;
    background: 
        radial-gradient(ellipse at center, rgba(252, 132, 175, 0.4), rgba(167, 125, 255, 0.2)),
        linear-gradient(to right, rgba(6, 18, 60, 0.1) 60%, rgba(255, 44, 120, 0.3));
    width: fit-content;
    color: var(--color-text);
    gap: 10px;

`;
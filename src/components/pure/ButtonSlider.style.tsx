import { styled } from "styled-components";

export const ButtonSliderCss = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: .5rem;
    color: var(--color-text);
    gap: 0.5rem;
    background: var(--box-shadow-inputs);
    cursor: pointer;
    transition: background 0.3s ease;
    &:hover {
        background: var(--box-shadow-inputs-hover);
    }
    &:active {
        background: var(--box-shadow-inputs-active);
    }
    &:focus {
        outline: none;
    }
    &.active {
        background: var(--box-shadow-inputs-active);
    }
    &.disabled {
        background: var(--box-shadow-inputs-disabled);
        cursor: not-allowed;
    }
    &.disabled:hover {
        background: var(--box-shadow-inputs-disabled);
    }
    &.disabled:active {
        background: var(--box-shadow-inputs-disabled);
    }
    &.disabled:focus {
        outline: none;
    }
    &.disabled.active {
        background: var(--box-shadow-inputs-disabled);
    }
`
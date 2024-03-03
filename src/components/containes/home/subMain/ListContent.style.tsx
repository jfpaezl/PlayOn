
import { styled } from "styled-components";

export const ListContentCss = styled.div`
    display:  flex;
    flex-direction: column;
    gap: 1rem;
    .swiper-button-next, .swiper-button-prev {
        width: 3rem;
        background-color: rgba(234, 234, 234, 0.7)!important;
        border-radius: .5rem;
        padding: 10px;
        color: var(--color-text);
    }
    @media (max-width: 768px){
        .swiper-button-next, .swiper-button-prev {
            display: none;
        }
    }

`;
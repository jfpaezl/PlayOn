import { styled } from "styled-components";

export const HeroWrapper = styled.section`
    position: relative;
    max-height: 50rem;
    background-color: var(--backgroud-section);
    border-radius: 1rem;
    padding-top: 2rem;
    .swiper {
        width: 100%;
        height: 35rem;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        max-width: 350px;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
    }
`;

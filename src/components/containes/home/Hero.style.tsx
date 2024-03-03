import { styled } from "styled-components";

export const HeroWrapper = styled.section`
    position: relative;
    max-height: 50rem;
    background-color: var(--backgroud-section);
    border-radius: 1rem;
    padding-top: 2rem;
    justify-content: center;
    align-items: center;
    .swiper-button-next, .swiper-button-prev {
        width: 3rem;
        background-color: rgba(234, 234, 234, 0.7)!important;
        border-radius: .5rem;
        padding: 10px;
        color: var(--color-text);
    }
    .containerCarts{
        max-width:90rem;
        margin:auto;
    }
    .swiper {
        width: 100%;
        height: 35rem;
        padding-top: 1rem;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        max-width: 350px;
    }

    @media (max-width: 768px){
        height: 30rem;
        .swiper {
            height: 25rem;
        }
        .swiper-slide{
            max-width: 250px;
        }
        .swiper-button-next, .swiper-button-prev {
            display: none;
        }
    }
`;

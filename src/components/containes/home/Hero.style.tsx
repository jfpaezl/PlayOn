import { styled } from "styled-components";

export const HeroWrapper = styled.section`
    position: relative;
    max-height: 50rem;
    background-color: var(--backgroud-section);
    border-radius: 1rem;
    padding-top: 2rem;
    justify-content: center;
    align-items: center;
    .containerCarts{
        max-width:88rem;
        margin:auto;
    }
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
    @media (max-width: 768px){
        height: 30rem;
        .swiper {
            height: 25rem;
        }
        .swiper-slide{
            max-width: 250px;
        }
    }
`;

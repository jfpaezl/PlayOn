import {styled} from 'styled-components'

export const HeroProfileCss = styled.section`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    padding: 3rem;
    .avatar{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .order{
        position: relative;
        display: flex;
        gap: 1rem;
    }
    .contentImg{
        position: relative;
        img{
        width: 130px;
        height: 150px;
        border-radius: .5rem;
        cursor: pointer;
        object-fit: cover;
        }
    }
    .icon{
        position: absolute;
        left: 30%;
        bottom: -25%;
        color: var(--color-background);
        font-size: 2.5rem;
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        z-index: 3;
    }
    .barra{
        position: absolute;
        bottom: -28%;
        width: 100%;
        height: 3rem;
        border: solid 1px var(--box-shadow-cards3);
        border-radius: 2rem;
        background: linear-gradient( rgba(244, 244,244) ,rgba(144, 144, 144));
        opacity: 0.52;
        z-index: 1;
    }
    .icon1{
        background: linear-gradient(rgba(255, 44, 120, 1), rgba(6, 18, 60, 1));
    }
    .icon2{
        background: linear-gradient(rgba(121, 121, 121, 1), rgba(6, 18, 60, 1));
    }
    .icon3{
        background: linear-gradient(rgba(255, 175, 72, 1), rgba(93, 181, 200, 1));
    }
    .avatarImg{
        display: flex;
        gap: 1rem;
    }

    @media (max-width: 1200px){
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
    }

`
import { styled } from "styled-components";

export const FooterCss = styled.footer`
    align-items: center;
    padding-bottom: 2rem;
    overflow: hidden;
    .social{
        display: flex;
        gap: 1rem;
        cursor: pointer;
        i{
            font-size: 1.5rem;
        }
    }
    .links{
        display: flex;
        gap: 1rem;
        a{
            font-size: 1rem;
            text-decoration: none;
            color: var(--color-text);
        }
    }
    .upLoad{
        display: flex;
        gap: 1rem;
        span{
            font-size: .8rem;
            color: var(--color-text);
        }
        .icon{
            font-size: 2.5rem;
            color: var(--color-text);
        }
        p{
            color: var(--color-text);
        }
    }


    @media (max-width: 768px){
        .links{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem 2rem;
        }
        .upLoad{
            display: flex;
            flex-direction: column;
        }
    }
`;
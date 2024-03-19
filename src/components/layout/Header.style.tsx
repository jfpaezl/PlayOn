import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row !important;
    align-items: center;
    width: 100vw;
    gap: 5rem;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 1rem;
        ul{
            display: flex;
            gap: 3rem;
            li{
                cursor: pointer;
            }
        }
        .search{
            border-radius: 5px;
            padding: .5rem;
            border: none;
            background-color: var(--backgroud-section);
            color: var(--color-text);
            
            &:focus{
                outline: none;
                box-shadow: 0 0 30px rgba(85, 75, 75, 0.479);
            }
        }
        transition: opacity 0.5s ease-in-out;
    }
    .link{
        color: var(--color-text);
    }
    .contentIcons{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .icon{
        font-size: 1.5rem;
        cursor: pointer;
    }
    .sr-only{
        display: none;
    }
    @media (max-width: 900px) {
        .nav{
            ul{
                gap: 2rem;
            }
        }
    }
    @media (max-width: 768px){
        .nav{
            display: none;
        }
    }
`;

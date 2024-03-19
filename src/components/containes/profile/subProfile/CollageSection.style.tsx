import {styled} from 'styled-components'

export const CollageSectionCss = styled.section`
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    strong{
        font-size: 2rem;
    }
    .contendButtons{
        width: 100%;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .contentDiv{
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }
    Button{
        &:focus{
            outline: none;
            background-color: var(--box-shadow-cards3);
        };
    }
    .icon{
        font-size: 2rem;
    }
    p{
        font-size: 1rem;
    }
    @media (max-width: 1200px){
        .contendButtons{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        strong{
            font-size: 1.5rem;
        }
        .icon{
            font-size: 2rem;
        }
        p{
            font-size: 1rem;
        }
    }
    @media (max-width: 600px){
        padding: 0;
        strong{
            font-size: 1rem;
        }
        .contendButtons{
            gap: 0.5rem;
        }
        .contentDiv{
            gap: 0.5rem;
        }
        .icon{
            font-size: 1.5rem;
        }
        p{
            font-size: 0.8rem;
        }
    }
`

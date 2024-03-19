import {styled} from 'styled-components'

export const NewLiveCss = styled.div`
    box-shadow: 
        10px -5px 50px var(--box-shadow-cards2),
        -10px 5px 50px var(--box-shadow-cards5); 
    overflow: hidden;
    border-radius: 1rem;
    position: relative; 
    object-fit: cover;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .action{
        display: flex;
        align-items: center;
        gap: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 2.5rem;
        color: var(--color-text);
        padding: 0.5rem 1rem;
    }
`

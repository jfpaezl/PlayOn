import {styled} from "styled-components";

export const ListButtonsCss = styled.div`
    display: flex;
    gap: 1rem;
    margin: auto;

    padding: 1rem 0;
    .icon{
        font-size: 1.2rem;
    }
    @media (max-width: 900px){
        overflow: auto;
        width: 100%;
    }

`;
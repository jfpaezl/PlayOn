import {styled} from "styled-components";

export const CardContentCss = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    /* width: 250px;
    height: 365px; */
    border-radius: .5rem;
    box-shadow: 5px 0 10px var(--box-shadow-cards1);

    img{
        border-radius: .5rem;
        width: 100%;
        display: block;
        object-fit: contain;
    }

`;
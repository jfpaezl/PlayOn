import {styled} from "styled-components";

export const CardContentCss = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    object-fit: contain;
    border-radius: .5rem;
    box-shadow: 5px 0 10px var(--box-shadow-cards1);
    overflow: hidden;

    img{
        width: 100%;
        display: block;
        object-fit: contain;
    }
    .top{
        position: absolute;
        font-size: 8rem;
        bottom:-10%;
        right: 0;
        color: #ffffff8f;
        font-weight: 900;
        z-index: 100 !important;
    }
`;
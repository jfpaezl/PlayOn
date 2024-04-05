import {styled} from 'styled-components';

export const CardMovieCss = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        border-radius: 1rem;
        display: block;
        box-shadow:  0 10px 20px var(--box-shadow-cards1),0 -20px 40px var(--box-shadow-cards1), 0 0 50px var(--box-shadow-cards3);
    }
`;
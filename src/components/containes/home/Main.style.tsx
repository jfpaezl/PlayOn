import { styled } from "styled-components";

export const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    gap: 3rem;
    padding: 3rem;
    background-color: var(--backgroud-section);

    @media (max-width: 768px){
        padding: .5rem 1rem;
    }

    @media (max-width: 900px){
        gap: 2rem;
    }
`;
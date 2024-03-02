import { styled } from "styled-components";

export const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    gap: 2rem;
    padding: 1rem 2rem;
    background-color: var(--backgroud-section);

    @media (max-width: 768px){
        padding: .5rem 1rem;
    }
`;
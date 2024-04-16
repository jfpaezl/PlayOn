import {styled} from 'styled-components'


export const ChaptersCss = styled.section`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    gap: 3rem;
    padding: 3rem;
    background-color: var(--backgroud-section);
    .selectCahpters{
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .contentChapters{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    .chapters{
        min-height: 150px;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 1rem;
        background-color: var(--backgroud-selected);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;    
        h4{
            margin-bottom: 1rem;
            z-index: 2;
        }
        .description{
            opacity: 0;
            font-size: .8rem;
            transition: opacity 0.5s ease-in-out;
            z-index: 2;
        }
        &:hover{
            .description{
                opacity: 1;
            }
        }
    }
    @media(max-width: 768px){
        padding: 1rem;
        .selectCahpters{
            flex-direction: column;
            gap: 1rem;
        }
    }
`
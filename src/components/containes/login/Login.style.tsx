import {styled} from "styled-components";

export const LoginCss = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .section{
        position: relative;
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(5, 1fr);
        width: 100%;
        height: 85vh;
        background: var(--backgroud-section);
        border-radius: 1rem;
        overflow: hidden;
    }
    .container{
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        margin: 0 .5rem;
        padding: 3rem;
        border-radius: 1rem;
        background-color: var(--box-shadow-cards4);
        max-width: 30rem;
    }
    .formLogin{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .contInput{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .inputLogin{
        padding: .5rem;
        border: none;
        color: var(--color-text);
        border-radius: .5rem;
        background: var(--color-background);
        &:focus{
            outline: none;
            box-shadow: 0 0 0 2px var(--box-shadow-cards4);
        }
    }
    .linkR{
        color: var(--color-icons);
        cursor: pointer;
    }
    .linkF{
        cursor: pointer;
        &:hover{
            color: var(--box-shadow-cards2);
        }
    }
    .button{
        padding: .5rem;
        border: none;
        border-radius: .5rem;
        background: var(--color-icons-selected);
        color: var(--color-text);
        cursor: pointer;
    }
    .hiden{
        display: none;
    }
    img{
        width: 100%;
        border-radius: 1rem;
        
        /* Ajusta el margen o posición vertical según sea necesario */
        &:nth-child(4) {
            margin-top: -140px;
        }
        &:nth-child(2) {
            margin-top: -140px;
        }
        &:nth-child(7) {
            margin-top: -140px;
        }
        &:nth-child(9) {
            margin-top: -140px;
        }
    }
    .contentLogin{
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    @media (max-width: 1500px){
        .section{
            grid-template-columns: repeat(3, 1fr);
        }
        img{
            /* Ajusta el margen o posición vertical según sea necesario */
            &:nth-child(4) {
                margin-top: 0;
            }
            &:nth-child(2) {
                margin-top: 0;
            }
            &:nth-child(7) {
                margin-top: 0;
            }
            &:nth-child(9) {
                margin-top: 0;
            }
        }
    }
    @media (max-width: 768px){
        .section{
            grid-template-columns: repeat(2, 1fr);
        }
        img{
            /* Ajusta el margen o posición vertical según sea necesario */
            &:nth-child(4) {
                margin-top: 0;
            }
            &:nth-child(2) {
                margin-top: 0;
            }
            &:nth-child(7) {
                margin-top: 0;
            }
            &:nth-child(9) {
                margin-top: 0;
            }
        }
    }
`
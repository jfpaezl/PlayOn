import {styled} from "styled-components";

export const LoginCss = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    .section{
        position: relative;
        display: grid;
        gap: 1.5rem;
        width: 100%;
        height: 85vh;
        background-image: url('src/assets/img/Inicio.png');
        background-size: cover;
        background-position: center;
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
        .labelLogin{
            margin-bottom: .5rem;
        }
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
    .message{
        color: var(--color-text);
        font-size: 1rem;
        font-weight: 500;
        background: var(--color-dark);
        padding: .5rem;
        border-radius: .5rem;
        text-align: center;
    }
    .error{
        color: var(--color-error);
        font-size: .8rem;
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
    
`
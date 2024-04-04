import { styled } from 'styled-components'

export const PlayDetailCss = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 0.3fr 1fr;
    overflow: hidden;
    border-radius: 10px;
    .details{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 130%;
        height: 100%;
        transform: translateX(0%);
        padding: 1rem 2rem;
        background: radial-gradient( 
            50%  /**ancho del gradiante */
            170%  /**alto del gradiante */
            at 50% 50%,  /** posicion primero en x liego en y */
            var(--color-background)70%,  /**color del gradiante  */
            transparent 100% /**color de fondo del gradiante  */
        );
        h2{
            font-size: 3rem;
            font-weight: 900;
        }

    }
    .fondo{
        width: 100%;
        height: 100%;
        min-height: 500px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contentPlay{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--box-shadow-cards4);
        border-radius: 50%;
        padding: 1.5rem;
        border: 2px solid var(--color-icons);
        cursor: pointer;
    }
    .react-youtube {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .iconPlay{
        font-size: 3rem;
        color: var(--color-icons);
        cursor: pointer;
    }
    .span{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .puntuation{
            background-color: var(--color-primary);
            color: var(--color-text);
            padding: 0.5rem;
            border-radius: 10px;
        }
    }
    .puntuation{
        background-color: var(--box-shadow-cards4) !important;
        color: var(--color-text) !important;
        border-radius: 10px;
        padding: 0 0.5rem !important;
    }
    .trailer{
        color: var(--color-text);
        font-size: 1.3rem;
    }

    .contentButtons{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .icons{
        display: flex;
        gap: 1rem;
        justify-content: end;
        padding-right: 30px;
    }
    .icon{
        font-size: 1.5rem;
        cursor: pointer;
    }   
    .select{
        color: var(--color-icons-selected) !important;
    }
    .show{
        opacity: 1;
        visibility: visible;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
    .hidden{
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }

    .video{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 768px){
        grid-template-columns: 1fr;
        .details{
            width: 100%;
            height: 120%;
            padding: 1rem;
            order: 2;
            transform: translatey(0%);
            background: radial-gradient(
                170%  /**ancho del gradiante */
                50%  /**alto del gradiante */
                at 50% 50%,  /** posicion primero en x liego en y */
                var(--color-background) 70%,  /**color del gradiante  */
                transparent 100% /**color de fondo del gradiante  */
            
            );
            h2{
                font-size: 2rem;
            }
        }
        .fondo{
            width: 100%;
            min-height: 200px;
            order: 1;
        }
    }   
`
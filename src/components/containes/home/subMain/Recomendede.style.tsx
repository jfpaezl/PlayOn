import {styled} from "styled-components";

export const RecomendedCss = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 
        10px -5px 50px var(--box-shadow-cards2),
        -10px 5px 50px var(--box-shadow-cards5); 
    background-image: 
        radial-gradient( 
            500px  /**ancho del gradiante */
            400px  /**alto del gradiante */
            at 75% 25%,  /** posicion primero en x liego en y */
            var(--box-shadow-cards5),  /**color del gradiante  */
            transparent 100% /**color de fondo del gradiante  */
        ), 
        radial-gradient( 
            500px  /**ancho del gradiante */
            300px  /**alto del gradiante */
            at 80% 80%,  /** posicion primero en x liego en y */
            var(--box-shadow-cards2),  /**color del gradiante  */
            transparent 100% /**color de fondo del gradiante  */
        );
    ;
    .messaje{
        padding: 1rem 3rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        justify-content: space-between;
        max-height: 500px;
    }
    .contendButtons{
        display: flex;
        gap: 1rem;
    }
    .button{
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: none;
        background: var(--box-shadow-inputs);
        color: var(--color-text);
        border: 1px solid var(--color-text);
        cursor: pointer;
    }
    .icon{
        font-size: 1.5rem;
    }
    .title{
        font-size: 2rem;
    }
    .imgreference{
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
    }
    img{
        width: 100%;
        border-radius: 1rem;
        

    }
    @media (max-width: 1200px){
        background-image: 
            radial-gradient( 
                270px  /**ancho del gradiante */
                400px  /**alto del gradiante */
                at 75% 25%,  /** posicion primero en x liego en y */
                var(--box-shadow-cards5),  /**color del gradiante  */
                transparent 100% /**color de fondo del gradiante  */
            ), 
            radial-gradient( 
                270px  /**ancho del gradiante */
                300px  /**alto del gradiante */
                at 80% 80%,  /** posicion primero en x liego en y */
                var(--box-shadow-cards2),  /**color del gradiante  */
                transparent 100% /**color de fondo del gradiante  */
            );
        ;
        img{
            width: 100%;
            border-radius: 1rem;
            
            /* Ajusta el margen o posición vertical según sea necesario */
            &:nth-child(4) {
                margin-top: -20px;
            }
            &:nth-child(2) {
                margin-top: -20px;
            }
        }
    }
    @media (max-width: 800px){
        .title{
            font-size: 1.5rem;
        }
        .button{
            padding: 1rem 1.5rem;
            font-size: .8rem;
        }
        .icon{
            font-size: 1rem;
        }
        .contendButtons{
            flex-direction: column;
        }
    }
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
        .imgreference{
            display: none;
        }
    }
`;
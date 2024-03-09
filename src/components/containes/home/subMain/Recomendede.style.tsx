import {styled} from "styled-components";

export const RecomendedCss = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    max-height: 570px;
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
        
        /* Ajusta el margen o posición vertical según sea necesario */
        &:nth-child(4) {
            margin-top: -140px;
        }
        &:nth-child(2) {
            margin-top: -140px;
        }
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
    }
    @media (max-width: 420px) {
        grid-template-columns: 1fr;
        .imgreference{
            display: none;
        }
    }
`;
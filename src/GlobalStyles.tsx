import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* CSS Reset */

    /* Box sizing rules */
    *, *::before, *::after {
    box-sizing: border-box;
    }

    /* Remove default margin */
    body, h1, h2, h3, h4, p, figure {
    margin: 0;
    }

    /* Remove list styles on ul, ol elements */
    ul, ol {
    padding: 0;
    list-style: none;
    }

    /* Set core body defaults */
    body {
    min-height: 100vh; 
    height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    overflow: auto; /* Cambiar overflow a auto en lugar de hidden */
    }

    body:hover {/* Solo ocultar el scrollbar cuando el usuario pasa el ratón sobre el body */
        overflow-y: scroll;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: .5rem;
        height: .5rem;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--color-icons);
        border-radius: 1rem;
    }

    /* Remove anchor text decoration */
    a {
    text-decoration: none;
    }

    /* Reset form styles */
    button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    }

    /* Reset button styles */
    button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    }

    /* Reset images to ensure they never overflow their containers */
    img {
    max-width: 100%;
    display: block;
    }


    :root {
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        font-weight: 400;

        --color-text: #D9D9D9;
        --color-background: #020510;
        --color-icons:#ACACAC;
        --color-icons-selected: #FF2C78;
        --color-dark: #1D1731;
        --backgroud-section: #0A031C;
        --backgroud-selected: rgba(29, 23, 49, 1);
        --box-shadow-inputs: rgba(85, 75, 75, 0.479);
        --box-shadow-cards1: rgba(6, 18, 60, 0.5);
        --box-shadow-cards2: rgba(255, 44, 120, 0.5);
        --box-shadow-cards3: rgba(234, 234, 234, 0.5);
        --box-shadow-cards4: rgba(121, 121, 121, 0.5);


        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: rgba(2, 5, 16, 1);

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


    .container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 110rem;
        width: 100%;
        margin: 0 auto;
        padding:1rem  2rem;
    }
    .content{
        min-height: 70vh;
    }

    @media (max-width: 768px){
        .container{
            padding: .5rem 1rem;
        }
    }
`;


import {styled} from 'styled-components';

export const VideoCss = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    font-weight: 700;
    overflow: hidden;
    .video{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .contendControls{
        position: absolute;
        display: flex;
        gap: 1rem;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    } 
    .icon{
        display: flex;
        background: none;
        align-items: center;
        justify-content: center;
        border: none;
        color: var(--box-shadow-cards2);
        font-size: 2rem;
        margin: 0 1rem;
        cursor: pointer;
    }
    .progres{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .bar{
        color: var(--box-shadow-cards2);
        margin-right: .5rem;
    }
    .showBar{
        position: relative;
        background: var(--color-text);
        height: 4px;
        width: 120vh;
        border-radius: 20px;
    }
    .barra{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 20px;
        background: var(--box-shadow-cards2);
    }
    .steed{
        background: var(--box-shadow-cards2);
        color: var(--color-text);
        border: none;
        border-radius: 20px;
        padding: 3px;
    }
    .input{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
        }
`   
import {styled} from 'styled-components';

export const VideoCss = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    font-weight: 700;
    .video{
        height: 99%;
        width: 100%;
        object-fit: cover;
    }
    .contendControls{
        position: absolute;
        display: flex;
        justify-content: space-between;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        align-items: center;
    }
    .icon{
        background: none;
        border: none;
        color: var(--backgroud-selected);
        font-size: 2rem;
        margin: 0 1rem;
        cursor: pointer;
    }
    .progres{
        display: flex;
        align-items: center;
    }
    .bar{
        color: var(--backgroud-selected);
        margin-right: .5rem;
    }
    .showBar{
        position: relative;
        background: var(--backgroud-selected);
        max-width: 64rem;
        height: 4px;
        width: 100vh;
        border-radius: 20px;
    }
    .barra{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 50%;
        background: var(--backgroud-selected);
    }
    .steed{
        background: var(--backgroud-selected);
        color: var(--color-text);
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
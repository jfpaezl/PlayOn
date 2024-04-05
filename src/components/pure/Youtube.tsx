import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoCloseSharp } from "react-icons/io5";

declare global {
    interface Window {
        onYouTubeIframeAPIReady?: () => void;
        YT?: any;
    }
}
interface YoutubeProps {
    link: string;
    paused: boolean;
    close?: () => void;
}

export default function Youtube({ link, paused, close }: YoutubeProps) {
    const videoId = new URL(link).searchParams.get('v');
    const playerRef = useRef<any>(null);

    // funcion para cargar el video
    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player('player', {
                height: '100%',
                width: '100%',
                videoId: videoId,
            });
        };
    }, [videoId]);

    // funcion para pausar el video
    useEffect(() => {
        if (playerRef.current) {
            if (paused) {
                playerRef.current.pauseVideo();
            }
            else {
                playerRef.current.playVideo();
            }
        }
    }, [paused]);

    return (
        <YoutubeCss>
            <div className='contentIcon' onClick={close}><IoCloseSharp className='icon'/></div>
            <div id="player"></div>
        </YoutubeCss>
    );
}

Youtube.prototype = {
    link: PropTypes.string.isRequired,
    paused: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
}

const YoutubeCss = styled.div`
    position: relative;
    max-width: 700px;//mantener el tamaño al mismo que el contenedor del mod
    width: 100%;
    padding-bottom: 56.25%; /* Para una relación de aspecto de 16:9 */
    overflow: hidden;
    iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .contentIcon{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        background-color: var(--box-shadow-inputs);
        border-radius: 50%;
        border: 1px solid var(--color-icons);
        padding: 5px;
        cursor: pointer;
    }
    .icon{
        color: var(--color-icons);
    }
`
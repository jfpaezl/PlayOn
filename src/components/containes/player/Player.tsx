import Video from "../../pure/Video";
import { PlayerCss } from "./Player.style";
import { usePlayer } from "./usePlayer";

// video referencia https://www.youtube.com/watch?v=Xcn_2Z9cBRs

export default function Player() {
    const { 
        videoRef, 
        progress,
        duration,
        isPaying,
        isFullScreen,
        volume,
        isPlaybackRate,
        togglePlay,
        handleVolumeChange,
        handlePlaybackRate,
        handleFullScreen,
        handleProgressChange
    } = usePlayer();
    return (
        <PlayerCss>
            <Video 
                videoRef={videoRef} 
                videoSrc='src/assets/videos/COLMETEC SAS - Opera 2023-08-19 10-21-59.mp4'
                // Estado
                progress={progress}
                duration={duration}
                isPlaying={isPaying}
                isFullScreen={isFullScreen}
                volume={volume}
                playbackRate={isPlaybackRate}

                // Eventos
                togglePlay={togglePlay}
                handleVolumeChange={handleVolumeChange}
                handlePlaybackRate={handlePlaybackRate}
                handleFullScreen={handleFullScreen}
                handleProgress={handleProgressChange}
            />
        </PlayerCss>
    );
}


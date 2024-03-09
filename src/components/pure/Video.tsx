import { VideoCss } from "./Video.style";
import propTypes from "prop-types";
import { FaPlay, FaPause, } from "react-icons/fa";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

}

interface PlayerProps {
    videoSrc: string;
    videoRef: React.RefObject<HTMLVideoElement>;
    progress: number;
    duration: number;
    isPlaying: boolean;
    isFullScreen: boolean;
    volume: number;
    playbackRate: number;
    togglePlay: () => void;
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePlaybackRate: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleFullScreen: () => void;
    handleProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Video(
    {
        videoSrc,
        videoRef,
        progress,
        duration,
        isPlaying,
        isFullScreen,
        volume,
        playbackRate,
        togglePlay,
        handleVolumeChange,
        handlePlaybackRate,
        handleFullScreen,
        handleProgress
    }: PlayerProps) {
    return (
        <VideoCss>
            <video
                className="video"
                ref={videoRef}
                src={videoSrc}
                onClick={togglePlay}
            >
            </video>
            <div className="contendControls">
                {
                    !isPlaying ?
                        <button className="icon" onClick={togglePlay}><FaPlay /></button> :
                        <button className="icon" onClick={togglePlay}><FaPause /></button>
                }
                <div className="progres">
                    <span className="bar">{formatTime(progress)}</span>
                    <div className="showBar">
                        <input 
                            className="input" 
                            type="range" 
                            min={0} 
                            max={duration} 
                            step={1} 
                            value={progress}
                            onChange={handleProgress}
                        />
                        <div className="barra" style={{width: `${progress/duration * 100}%`}}></div>
                    </div>
                    <span className="bar">{formatTime(duration)}</span>
                </div>
                <div>
                    <input 
                        type="range" 
                        min={0} 
                        max={1} 
                        step={0.1} 
                        value={volume} 
                        onChange={handleVolumeChange} 
                    />
                    <div className="barra" ></div>
                </div>
                <select className="steed" value={playbackRate} onChange={handlePlaybackRate}>
                    <option value="0.5">0.5</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                </select>
                <div>
                    {
                        !isFullScreen?
                        <button className="icon" onClick={handleFullScreen}><MdFullscreen /></button>:
                        <button className="icon" onClick={handleFullScreen}><MdFullscreenExit /></button>
                    }
                </div>
            </div>
        </VideoCss>
    );
}

Video.propTypes = {
    videoSrc: propTypes.string.isRequired,
    videoRef: propTypes.object.isRequired,
    progress: propTypes.number.isRequired,
    duration: propTypes.number.isRequired,
}
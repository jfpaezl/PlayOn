import { useCallback, useEffect, useRef, useState } from "react";

export const usePlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPaying, setIsPaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isPlaybackRate, setIsPlaybackRate] = useState(1);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        const video = videoRef.current;
        const handleTimeUpdate = () => setProgress(video?.currentTime || 0);
        const handleLoadedMetadata = () => setDuration(video?.duration || 0);
        video?.addEventListener('timeupdate', handleTimeUpdate);
        video?.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => {
            video?.removeEventListener('timeupdate', handleTimeUpdate);
            video?.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
    }, []);

    const togglePlay = useCallback(() =>{
        const video = videoRef.current;
        if(video?.paused){
            video?.play();
            setIsPaying(true);
        }
        else{
            video?.pause();
            setIsPaying(false);
        }
    }, []);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        videoRef.current!.volume = newVolume;
        setVolume(newVolume);
    }, []);

    const handlePlaybackRate = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPlaybackRate = Number(e.target.value);
        videoRef.current!.playbackRate = newPlaybackRate;
        setIsPlaybackRate(newPlaybackRate);
    }, []);

    const handleFullScreen = useCallback(() => {
        const video = videoRef.current;
        if(document.fullscreenElement){
            document.exitFullscreen();
            setIsFullScreen(false);
        }
        else{
            video?.requestFullscreen();
            setIsFullScreen(true);
        }
    }, []);

    const handleProgressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newProgress = Number(e.target.value);
        videoRef.current!.currentTime = newProgress;
        setProgress(newProgress);
    }, []);
    return {
        videoRef,
        isPaying,
        isFullScreen,
        volume,
        isPlaybackRate,
        progress,
        duration,
        togglePlay,
        handleVolumeChange,
        handlePlaybackRate,
        handleFullScreen,
        handleProgressChange
    }
}
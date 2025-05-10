import './VideoPage.css'
import { useState, useEffect } from 'react'

const VideoPage = ({ videoId, handleCloseVideo }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (videoId === '') {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }, [videoId]);

    return (
        <>  
            {videoId !== '' && (
                <div className={`video-background`} onClick={handleCloseVideo}>
                    <div className={`video-container column-div ${isVisible ? 'show' : ''}`}>
                        <div>
                            <iframe
                                className={`video-player`}
                                src={`https://www.youtube.com/embed/${videoId}`}
                                allowFullScreen
                                title="Embedded YouTube"
                            />
                        </div>
                        <button className='close-video-button' onClick={handleCloseVideo}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default VideoPage
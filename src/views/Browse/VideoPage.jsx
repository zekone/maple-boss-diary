import './VideoPage.css'

const VideoPage = ({ videoId, handleCloseVideo }) => {

    if (videoId === '') {
        return (<div className={`video-background`}></div>);
    } else {
        return (
            <div className={`video-background active column-div`}>
                <div>
                    <iframe
                        className="video-player"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allowFullScreen
                        title="Embedded YouTube"
                    />
                </div>
                <button onClick={handleCloseVideo}>Close</button>
            </div>);
    }

}

export default VideoPage
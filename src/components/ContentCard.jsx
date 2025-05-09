import './ContentCard.css'

const Thumbnail = ({ videoId, onClick }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    return (
        <img className='thumbnail' src={thumbnailUrl} onClick={onClick} />
    )
}

const ContentCard = ({ videoId, date, boss, onClickThumbnail }) => {
    return (
        <div className="content-card">
            <Thumbnail videoId={videoId} onClick={onClickThumbnail} />
            <span>{boss}</span>
            <span>{date}</span>
        </div>
    )
}

export default ContentCard
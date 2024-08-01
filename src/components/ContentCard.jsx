import Label from './Label'
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
            <Label text={boss} />
            <Label text={date} />
        </div>
    )
}

export default ContentCard
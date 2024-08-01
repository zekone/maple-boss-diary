import ContentCard from './ContentCard'
import './ContentSection.css'

const ContentSection = ({ header, contents, divref, setVideoId }) => {
    return (
        <div className='content-section' ref={divref}>
            <h3> {header} </h3>
            <div className='content-list'>
                {contents.map(content =>
                    <ContentCard
                        key={content.id}
                        videoId={content.id}
                        onClickThumbnail={() => setVideoId(content.id)}
                        date={`${content.date} (W${content.week})`}
                        boss={content.boss}
                    />)
                }
            </div>
        </div>
    )
}

export default ContentSection   
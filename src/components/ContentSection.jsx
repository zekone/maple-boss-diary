import ContentCard from './ContentCard'
import './ContentSection.css'

const ContentSection = ({ header, contents, divref, setVideoId }) => {
    return (
        <div className='content-section' ref={divref}>
            <h3 className="conten-section-header"> {header} </h3>
            <div className='content-list'>
                {contents.map(content =>
                    <ContentCard 
                        key={content.id} 
                        id={content.id}
                        boss={content.boss}
                        date={content.date}
                        week={content.week}
                        setVideoId={setVideoId}
                    />
                )}
            </div>
        </div>
    )
}

export default ContentSection   
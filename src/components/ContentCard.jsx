import './ContentCard.css'


const ContentCard = ({ id, boss, date, week, setVideoId }) => {
    return (
        <div className="content-card">
            <img 
                className='thumbnail' 
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
                onClick={()=>setVideoId(id)} 
                alt={id}
            />
            <span> {boss} </span>
            <span> {`${date} (W${week})`} </span>
        </div>
    )
}

export default ContentCard
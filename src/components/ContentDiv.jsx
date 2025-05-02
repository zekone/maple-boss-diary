import ContentSection from "./ContentSection";
import Label from "./Label";
import './ContentDiv.css';

const ContentDiv = ({ selectedView, weeks, groupedWeeks, bosses, groupedBosses, setVideoId, sectionRef , latestDate }) => {

    return (
        <div className='content-container'>
            {
                selectedView === 'Week' ? (
                    weeks.map(week =>
                        <ContentSection
                            key={week}
                            divref={element => sectionRef.current[`Week ${week}`] = element}
                            header={`Week ${week}`}
                            setVideoId={setVideoId}
                            contents={groupedWeeks[week]}
                        />)
                ) : (
                    bosses.map(boss =>
                        <ContentSection
                            key={boss}
                            divref={element => sectionRef.current[boss] = element}
                            header={boss}
                            setVideoId={setVideoId}
                            contents={groupedBosses[boss]}
                        />)
                )
            }
            <Label text={`Latest update: ${latestDate}`} />
        </div>
    )
}

export default ContentDiv
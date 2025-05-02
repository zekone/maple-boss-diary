import { useState, useRef } from "react";
import TopNav from "../../components/TopNav";
import Sidebar from "../../components/Sidebar";
import Label from "../../components/Label";
import ContentSection from "../../components/ContentSection";
import VideoPage from './VideoPage'
import './BrowsePage.css';

const groupBy = (data, keyExtractor) => {
    return data.reduce((acc, current) => {
        const key = keyExtractor(current);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(current);
        return acc;
    }, {});
};

const BrowsePage = ({ selectedView, data, handleSelectBoss, handleSelectWeek }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const sectionRef = useRef({});
    const [videoId, setVideoId] = useState('')

    const handleCloseVideo = () => setVideoId('')

    const handleScrollToSection = (sectionName) => {
        if (sectionRef.current[sectionName]) {
            sectionRef.current[sectionName].scrollIntoView({ behavior: 'smooth', block:"center" });
        }
    }

    const handleToggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

    const handleCloseSidebar = () => setIsSidebarVisible(false);

    const groupedBosses = groupBy(data, item => item.boss);
    const groupedWeeks = groupBy(data, item => item.week);
    const bosses = Object.keys(groupedBosses);
    const weeks = Object.keys(groupedWeeks);
    const weeksSpelt = weeks.map(week => `Week ${week}`)

    const latestDate = data.reduce((acc, current) => {
        if (acc < current.date) {
            acc = current.date;
        }
        return acc;
    }, '0')

    return (
        <div>
            <VideoPage
                videoId={videoId}
                handleCloseVideo={handleCloseVideo}
            />
            <TopNav
                view={selectedView}
                handleToggleSidebar={handleToggleSidebar}
                handleSelectBoss={handleSelectBoss}
                handleSelectWeek={handleSelectWeek}
            />
            <Sidebar
                sidebar={isSidebarVisible}
                handleScrollToSection={handleScrollToSection}
                handleCloseSidebar={handleCloseSidebar}
                sections={selectedView === 'Week' ? weeksSpelt : bosses}
            />
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
            </div>
            <Label text={`Latest update: ${latestDate}`} />
        </div>
    )
}

export default BrowsePage
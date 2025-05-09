import { useState, useRef } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import VideoPage from './VideoPage'
import ContentDiv from "../components/ContentDiv";

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

const BrowsePage = ({ data, selectedView }) => {
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
        <>
            <NavBar
                handleToggleSidebar={handleToggleSidebar}
            />

            <VideoPage
                videoId={videoId}
                handleCloseVideo={handleCloseVideo}
            />

            <div>
                <Sidebar
                    sidebar={isSidebarVisible}
                    handleScrollToSection={handleScrollToSection}
                    handleCloseSidebar={handleCloseSidebar}
                    sections={selectedView === 'Week' ? weeksSpelt : bosses}
                />
                <ContentDiv
                    selectedView={selectedView}
                    weeks={weeks}
                    groupedWeeks={groupedWeeks}
                    bosses={bosses}
                    groupedBosses={groupedBosses}
                    setVideoId={setVideoId}
                    sectionRef={sectionRef}
                    latestDate={latestDate}
                />
            </div>
        </>
    )
}

export default BrowsePage
import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { sortFunctions } from './utils'
import BrowsePage from './page/BrowsePage'
import axios from 'axios'
import AddPage from './page/AddPage'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import VideoPage from './page/VideoPage'
import EditPage from './page/EditPage'
import SearchPage from './page/SearchPage'

const jsonUrl = 'https://raw.githubusercontent.com/zekone/maple-boss-json/main/boss.json';

const App = () => {
    const [data, setData] = useState([]);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const navigate = useNavigate();
    const [displayItems, setDisplayItems] = useState([]);
    const [sortBy, setSortBy] = useState(0);
    const sectionRef = useRef({});
    const [videoId, setVideoId] = useState('')    
    
    useEffect(() => {
        axios
        .get(jsonUrl)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            alert("Failed to retrieve JSON data from server.")
        })
    }, [])

    useEffect(() => {
        const sortFunction = sortFunctions[sortBy].function;
        setDisplayItems(sortFunction(data));
    }, [data, sortBy]);

    const handleGoHome = () => {
        navigate('/');
    }

    const handleGoHomeAnd = (func) => {
        navigate('/');
        setTimeout(func, 300);
    }

    const handleGoAdd = () => {
        navigate('/add');
    }

    const handleGoEdit = () => {
        navigate('/edit');
    }

    const handleSearch = query => {
        navigate(`/search?query=${encodeURIComponent(query)}`);
    }

    const handleToggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
    
    const handleCloseSidebar = () => setIsSidebarVisible(false);

    const handleCloseVideo = () => setVideoId('')

    const handleScrollToSection = (sectionName) => {
        if (sectionRef.current[sectionName]) {
            sectionRef.current[sectionName].scrollIntoView({ behavior: 'smooth', block:"center" });
        }
    }

    return (
        <>
            <NavBar
                handleGoHome={handleGoHome} 
                handleGoAdd={handleGoAdd} 
                handleGoEdit={handleGoEdit} 
                handleToggleSidebar={handleToggleSidebar} 
                handleSearch={handleSearch}
            />

            <Sidebar
                sidebar={isSidebarVisible}
                handleScrollToSection={handleScrollToSection}
                handleCloseSidebar={handleCloseSidebar}
                sections={displayItems.map(item=>item.header)}
            />

                
            <VideoPage
                videoId={videoId}
                handleCloseVideo={handleCloseVideo}
            />

            <Routes>
                <Route path="/" element = {<BrowsePage displayItems={displayItems} sectionRef={sectionRef} sortBy={sortBy} setSortBy={setSortBy} setVideoId={setVideoId}/>}/>
                <Route path="/add" element={<AddPage/>} />
                <Route path="/edit" element={<EditPage data={data} />} />
                <Route path="/search" element={<SearchPage data={data} setVideoId={setVideoId}/>} />
            </Routes>
        </>
    )

}
export default App

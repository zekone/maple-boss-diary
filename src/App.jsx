import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import BrowsePage from './page/BrowsePage'
import axios from 'axios'

const jsonUrl = 'https://raw.githubusercontent.com/zekone/maple-boss-json/main/boss.json';

const App = () => {
    const [data, setData] = useState([])

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

    return (
        <>
            <Routes>
                <Route path="/" element = {<BrowsePage data={data}/>}/>
                {/* <Route path="/add" element={<AddPage setHasChanges={setHasChanges}/>} />
                <Route path="/edit" element={<EditPage data={data} setHasChanges={setHasChanges}/>} />
                <Route path="/search" element={<SearchPage data={data} setVideoId={setVideoId}/>} /> */}
            </Routes>
        </>
    )

}
export default App

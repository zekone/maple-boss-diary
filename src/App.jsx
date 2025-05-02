import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import BrowsePage from './views/Browse/BrowsePage'
import SelectPage from './views/Select/SelectPage'

const jsonUrl = 'https://raw.githubusercontent.com/zekone/maple-boss-json/main/boss.json';

const App = () => {
    const [data, setData] = useState([])
    const [selectedView, setSelectedView] = useState('Boss')

    const handleSelectBoss = () => setSelectedView('Boss')
    const handleSelectWeek = () => setSelectedView('Week')

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

    if (selectedView === '') {
        return (
            <>
                <SelectPage
                    handleSelectBoss={handleSelectBoss}
                    handleSelectWeek={handleSelectWeek}
                />
            </>
        )
    } else {
        return (
            <>
                <BrowsePage
                    browseView={selectedView}
                    data={data}
                    selectedView={selectedView}
                    handleSelectBoss={handleSelectBoss}
                    handleSelectWeek={handleSelectWeek}
                />
            </>
        )
    }


}
export default App

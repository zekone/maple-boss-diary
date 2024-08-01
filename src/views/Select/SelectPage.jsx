import bossIcon from '/slime.png'
import calendarIcon from '/calendar.png'
import './SelectPage.css'

const SelectPage = ({ handleSelectBoss, handleSelectWeek }) => {
    return (
        <div className='column-div select-page'>
            <div>
                <a onClick={handleSelectBoss}>
                    <img src={bossIcon} className="logo" alt="Boss icon" />
                </a>
                <a onClick={handleSelectWeek}>
                    <img src={calendarIcon} className="logo" alt="Calendar icon" />
                </a>
            </div>
            <h1 className='no-wrap'>Maple Boss Diary</h1>
            <p className='no-wrap description'>
                A personal website where I share my bossing journey in MapleStory.
            </p>
            <p className="click-instruction no-wrap">
                Click on the icons to select view
            </p>
        </div>
    )
}

export default SelectPage
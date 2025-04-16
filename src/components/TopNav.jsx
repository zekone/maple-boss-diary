import './TopNav.css'
import { FiMenu } from "react-icons/fi";

const TopNav = ({ view, handleToggleSidebar, handleToggleView }) => {
    view = view === 'Week' ? 'Boss' : 'Week'

    return (
        <div className="row-div top-nav">
            <div className="row-div">
                <div className="nav-button-container">
                    <button className="menu-button" onClick={handleToggleSidebar}>
                        <FiMenu color="#545463" size="40px"/>
                    </button>
                </div>
                <h2 className="no-wrap">Maple Boss Diary</h2>
            </div>
            <div className="nav-button-container">
                <button className="view-button" onClick={handleToggleView}>
                    {view}
                </button>
            </div>
        </div>
    )
}

export default TopNav
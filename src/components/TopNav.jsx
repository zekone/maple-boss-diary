import menuIcon from '../assets/menu.svg';
import './TopNav.css'

const TopNav = ({ view, handleToggleSidebar, handleToggleView }) => {
    view = view === 'Week' ? 'Boss' : 'Week'

    return (
        <div className="row-div top-nav">
            <div className="row-div">
                <div className="nav-button-container">
                    <a className="menu-button" onClick={handleToggleSidebar}>
                        <img src={menuIcon}></img>
                    </a>
                </div>
                <h2 className="no-wrap">Maple Boss Diary</h2>
            </div>
            <div className="nav-button-container">
                <button onClick={handleToggleView}>
                    {view}
                </button>
            </div>
        </div>
    )
}

export default TopNav
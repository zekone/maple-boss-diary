import './TopNav.css'
import logo from "../../public/maplestory_icon.png"
import { FiMenu } from "react-icons/fi";
import { useState } from 'react'

const TopNav = ({ view, handleToggleSidebar, handleSelectWeek, handleSelectBoss }) => {
    const [open, setOpen] = useState(false) ;

    const handleDropdownClick = () => {
        setOpen(!open);
    };

    return (
        <div className="row-div top-nav">
            <div className="row-div">
                <div className="nav-button-container">
                    <FiMenu className="menu-icon" onClick={handleToggleSidebar}/>
                </div>
                <h2 className="no-wrap">Maple Boss Diary</h2>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' className='maple-logo' />
                </div>
            </div>

            <div className="nav-button-container">
                <button className="view-button" onClick={handleDropdownClick}>
                    {view}
                </button>

                <div className='dropdown-container'>
                    {open && (
                        <>
                        <div className='dropdown-item'>
                            <button onClick={() => {handleSelectWeek();setOpen(false)}} >
                                Week
                            </button>
                        </div>
                        <div className='dropdown-item'>
                            <button onClick={() => {handleSelectBoss();setOpen(false)}} >
                                Boss
                            </button>
                        </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopNav
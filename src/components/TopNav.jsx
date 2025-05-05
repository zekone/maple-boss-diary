import './TopNav.css'
import logo from "/maplestory_icon.png"
import { FiMenu, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from 'react'

const TopNav = ({ view, handleToggleSidebar, handleSelectWeek, handleSelectBoss }) => {
    const [isOpen, setIsOpen] = useState(false) ;

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="row-div top-nav">
            <div className="row-div ">
                <div className="nav-button-container">
                    <FiMenu className="menu-icon" onClick={handleToggleSidebar}/>
                </div>
                <h2 className="title no-wrap">Maple Boss Diary</h2>
                <div className='navbar-logo'>
                    <img src={logo} alt='logo' className='maple-logo' />
                </div>
            </div>

            <div className="nav-button-container">
                <button className="view-button" onClick={handleDropdownClick}>
                    <div className="view-button-container">   
                        View
                        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                </button>

                <div className='dropdown-container'>
                    {isOpen && (
                        <>
                        <div className='dropdown-item'>
                            <button onClick={() => {handleSelectWeek();setIsOpen(false)}} >
                                Week
                            </button>
                        </div>
                        <div className='dropdown-item'>
                            <button onClick={() => {handleSelectBoss();setIsOpen(false)}} >
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
import './NavBar.css';
import NavButtons from './NavButtons';
import SearchBar from './SearchBar';
import logo from "/maplestory_icon.png";
import { FiMenu } from "react-icons/fi";

const NavBar = ({ handleGoHome, handleGoAdd, handleGoEdit, handleToggleSidebar, handleSearch}) => {

    return (
        <div className="navbar">
            <div className="navbar-left">

                <FiMenu className="menu-icon" onClick={handleToggleSidebar}/>

                <div className='title-container' onClick={handleGoHome}>
                    <img className='maple-logo' src={logo} alt='logo' />
                    <h1 className="no-wrap title">Maple Boss Diary</h1>
                </div>

                <NavButtons items={["Add", "Edit"]} functions={[handleGoAdd, handleGoEdit]}/>

            </div>

            <SearchBar handleSearch={handleSearch}/>

        </div>
    )
}

export default NavBar
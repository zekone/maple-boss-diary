import "./SortByMenu.css"
import { useState } from 'react';
import { sortFunctions } from "../utils";

const SortByMenu = ({sortBy, setSortBy}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="dropdown-menu">
            <button className="dropdown-button" onClick={handleDropdownClick}>
                {sortFunctions[sortBy].name}
            </button>

            <div className='dropdown-container'>
                {isMenuOpen && (sortFunctions.map((item, index) =>(
                    <div className='dropdown-item' key={index}>
                        <button onClick={()=>{ setSortBy(index); setIsMenuOpen(false); }} >
                            {item.name}
                        </button>
                    </div>
                )))}
            </div>
        </div>
    )
}
  
export default SortByMenu
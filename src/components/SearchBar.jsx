import "./SearchBar.css";
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

const SearchBar = ({handleSearch}) => {
    const [query, setQuery] = useState('');

    const search = () => { handleSearch(query); setQuery(''); };

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
      };

    return (
        <div className="search-bar-container">
            <input className="search-input"
                type="text"
                placeholder={"Search"}
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />

            <button className="search-button" onClick={search}>
                <FiSearch/>
            </button>
        </div>
    )
}
  
export default SearchBar
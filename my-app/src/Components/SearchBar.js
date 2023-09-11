import React from 'react';
import "../Styles/SearchBar.css"


function SearchBar({ onSearch }) {
  return (
    <div className='search-container'>
      <input
        type="text"
        placeholder="Search by name or category"
        onChange={(e) => onSearch(e.target.value)} 
      />
     <i class="fa-sharp fa-solid fa-magnifying-glass" id='search-button'></i>
    </div>
  );
}

export default SearchBar;

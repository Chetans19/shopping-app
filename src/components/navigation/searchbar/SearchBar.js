import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <div>
            <div className="searchbar-element">
              <input type="text">
              </input>
              <button> Search </button>
            </div>
         
        </div>
    );
}

export default SearchBar;
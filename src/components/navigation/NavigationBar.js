import React from 'react';
import SearchBar from './searchbar/SearchBar';
import './NavigationBar.css';

function NavigationBar(props) {
    return (
        <div>
            <div className="navbar">
                <div className="amazon-logo">
                     <h2>Amazon</h2>
                     
                </div>
                
                <div className="navbar-elements" >
                    <ul className="navbar-items">
                        <li> <SearchBar /> </li>
                      <li> Cart </li>
                      <li> Login </li>
                    </ul>
                </div>
            </div>
           
            
            
        </div>
    );
}

export default NavigationBar;
import React from 'react';
import SearchBar from './searchbar/SearchBar';
import './NavigationBar.css';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function NavigationBar(props) {
    return (
        <div>
             <Router>
            <div className="navbar">
                <div className="amazon-logo">
                     
                     <Link className="link-element" to="/"><h2>Amazon</h2></Link>
                     
                </div>
 
                <div className="navbar-elements" >
                    <ul className="navbar-items">
                        <li> <SearchBar /> </li>
                      <li> <Link className="link-element" to="/cart">Cart</Link> </li>
                      <li> <Link className="link-element" to="/login">Login</Link> </li>
                      
                    </ul>
                </div>
            </div>
           
           
       <div>
       

        

          </div>
       </Router>
            
        </div>
    );
}

export default NavigationBar;
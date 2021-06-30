import React from 'react';
import SearchBar from './searchbar/SearchBar';
import './NavigationBar.css';
import Login from "../login/Login";
import Cart from "../cart/Cart";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavigationBar(props) {
    return (
        <div>
             <Router>
            <div className="navbar">
                <div className="amazon-logo">
                     <h2>Amazon</h2>
                     
                </div>
                
                <div className="navbar-elements" >
                    <ul className="navbar-items">
                        <li> <SearchBar /> </li>
                      <li> <Link to="/cart">Cart</Link> </li>
                      <li> <Link to="/login">Login</Link> </li>
                    </ul>
                </div>
            </div>
           
           
       <div>
       

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

          </div>
       </Router>
            
        </div>
    );
}

export default NavigationBar;
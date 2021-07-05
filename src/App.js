import React from 'react';
import './App.css';
import NavigationBar  from './components/navigation/NavigationBar';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';

import {
  BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";

import CardComponent from './components/products/CardComponent';



function App() {
  return (
   
<Router>
<div className="App">
         <NavigationBar />
       {/* <div >
         <CardComponent />
       </div> */}
       </div>
<Switch>
          <Route exact path="/cart" component={Cart}>
            
          </Route>
          <Route exact path="/login" className="login-component" component={Login}>
            
          </Route>
          <Route exact path="/" className="card-components" component={CardComponent}>
            
          </Route>
        </Switch>
</Router>
       
      
        
   
  );
}

export default App;

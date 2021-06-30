import React from 'react';
import './App.css';
import NavigationBar  from './components/navigation/NavigationBar';
// import SignUp from './components/signup/SignUp';
// import Login from './components/login/Login';
// import Cart from './components/cart/Cart';

import CardComponent from './components/products/CardComponent';



function App() {
  return (
    <div className="App">
         <NavigationBar />
       <div className="card-components">
         <CardComponent />
       </div>

      
        
    </div>
  );
}

export default App;

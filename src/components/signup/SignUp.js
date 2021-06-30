import React, { useState } from 'react';
import './SignUp.css'

function SignUp(props) {

    const [ state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    })

    const handleInputChange = (event) => {
        setState((prevProps) => ({
          ...prevProps,
          [event.target.name]: event.target.value
        }));
      };

      const showState = () => {
        console.log(state)
      }
     
      

    return (
        <div>
            <div className="signup">
            <h1>Amazon</h1>
                <div className="signup-card">
                    <div className="form-element">
                    <label>Name</label>
                <input type="text" name="name" value={state.name}
                onChange={handleInputChange} />
                    </div>
                   
                   <div className="form-element" > 
                        
                <label>Enter email</label>
                <input type="text" name="email" value={state.email}
                onChange={handleInputChange} />
                   </div>


                    <div className="form-element">
                    <label>Password</label>
                <input type="password" name="password" value={state.password}
                onChange={handleInputChange} />
                    </div>
                
                <div className="form-element">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={state.confirmPassword}
                onChange={handleInputChange} />
                </div>
                
                <button onClick={showState} >Signup</button>

                <p> <a href="google.com">  Login </a> </p>
                </div>
                
                
            </div>
            
        </div>
    );
}

export default SignUp;
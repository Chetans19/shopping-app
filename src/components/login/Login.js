import React, {useState} from 'react';

function Login(props) {
    
    const [ state, setState] = useState({
        email: "",
        password: "",  
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

           <div className="login">
            <h1>Amazon</h1>
                <div className="signup-card">
                  
                   
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
                
                
                
                <button onClick={showState} >Login</button>

                <p> <a href="google.com">  Create new account</a> </p>
                </div>
                
                
            </div>            

        </div>
    );
}

export default Login;
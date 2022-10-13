import React from 'react';
import '../../App.css';
import "./Signin.css";
import { Link } from 'react-router-dom';
import Popup from './LogInPopup';
import { useState } from 'react';


export default function SignIn() {


  const [buttonPopup,setButtonPopup]=useState(false);

 

  return ( <>
   <div className='Main-login-Div'>
   
   <h1 className='sign-ups'>Welcome to Login</h1>
  
  
  <form className="modal-content animate">
    

    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input className='input' type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input className='input' type="password" placeholder="Enter Password" name="psw" required/>
        
     
      <button onClick={()=>setButtonPopup(true)} className='button' type="submit">Login</button>

<Popup trigger={buttonPopup}>
  <h3> Successfully Login !....</h3>
</Popup>



      <label>
        <input type="checkbox"  name="remember"/> Remember me
      </label>
    </div>
    <div className='container5' >
    <div className='container1 ' >
    
    {/* <a href="./SingUp"  rel="noreferrer"> */}
          {/* <button>Click</button> */}
          
            <Link
              to='/SignUp'
            >     
    <button type="button" className='Signupbtn '>Sign Up</button>
    </Link> 
    {/* </a> */}
    <Link
     to='/Forgot'> 
    <h4 className='Forgot-password'>Forgot password</h4>
      </Link>
      {/* <link to="/forget-password" className='forgot-password' onClick={closeMobileMenu}>Forgot password</link> */}
    </div>
    <div className='container cont2' >
    <Link
     to='/Dashboard'> 
    <button  const path ='./SignUp' type="button"  className='cancelbtn'>Cancel</button>
    </Link>
    </div>
    </div>
    
  </form>
</div>

  </> );
} 

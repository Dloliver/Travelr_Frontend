import React, { useState } from 'react'
import '../css/header.css'

const Header = (params) => {
     const [signUpHidden, setSignUpHidden] = useState(true)
     const [logInHidden, setLogInHidden] = useState(true)

     const handleButtonToggle = (e) => {
          if(e.target.id == "sign-up"){
               setLogInHidden(true)
               setSignUpHidden(false)
          }else{
               setLogInHidden(false)
               setSignUpHidden(true)
          }
     }
     
     return (
          <>
          <div className="header">
               <h1>Travelr</h1>

               <div className="button-container">
                    <button id="sign-up" onClick={handleButtonToggle}>Sign Up</button>
                    <button id="log-in" onClick={handleButtonToggle}>Log In</button>
               </div>
          </div>

          <div className={signUpHidden ? "hidden" : "create-account"}>
               <form className="auth">
                    <label>Username: </label>
                    <input type="text" name="email" />
                    <label>Password: </label>
                    <input type="password" name="password" /><br />
                    <input type="submit" value="Create Account"/> 
               </form>
          </div>
          
          <div className={logInHidden ? "hidden" : "login"}>
               <form className="auth">
                    <label>Username: </label>
                    <input type="text" name="email" />
                    <label>Password: </label>
                    <input type="password" name="password" /><br />
                    <input type="submit" value="Log in"/> 
               </form>
          </div>
          </>
     )
}

export default Header;
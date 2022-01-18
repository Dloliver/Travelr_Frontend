import React, { useState } from 'react'
import '../css/header.css'

const Header = (props) => {
     let emptyBody = {email: '', password: ''}
     const [signUpHidden, setSignUpHidden] = useState(true)
     const [logInHidden, setLogInHidden] = useState(true)
     const [body, setBody] = useState({emptyBody})


     // this function toggles the visibility of the sign up and log in divs when
     // login/sign up buttons are clicked
     const handleButtonToggle = (e) => {
          if(e.target.id == "sign-up"){
               setLogInHidden(true)
               setSignUpHidden(false)
          }else{
               setLogInHidden(false)
               setSignUpHidden(true)
          }
     }

     const handleInputOnChange = (e) => {
          setBody({...body, [e.target.name]: e.target.value})
     }


     // log in submit function
     const handleLogInSubmit = (e) => {
          e.preventDefault()
          setSignUpHidden(true) // change log in and sign in visibility back to hidden
          setLogInHidden(true)
          props.handleLogIn(body) // lifts email and pass up to app.js
          setBody(emptyBody)
     }

     // sign up function
     const handleSignUpSubmit = (e) => {
          e.preventDefault()
          setSignUpHidden(true)
          setLogInHidden(true)
          props.handleSignUp(body) // lifts email and pass up to app.js
          setBody(emptyBody)
     }

     return (
          <>
          <div className="header">
               <h1>Travelr</h1>
               { props.currentUser ? <h3>Hello, {props.currentUser}</h3> : null}
               <div className={props.currentUser ? "hidden" : "button-container" }>
                    <button id="sign-up" onClick={handleButtonToggle}>Sign Up</button>
                    <button id="log-in" onClick={handleButtonToggle}>Log In</button>
               </div>
               <div className={props.currentUser ? "button-container" : "hidden"}>
                    <button onClick={props.handleLogOut}>Log Out</button>
               </div>
          </div>

          <div className={signUpHidden ? "hidden" : "create-account"}>
               <form className="auth" onSubmit={handleSignUpSubmit}>
                    <label>Username: </label>
                    <input type="text" name="email" onChange={handleInputOnChange}/>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={handleInputOnChange}/><br />
                    <input type="submit" value="Create Account"/>
               </form>
          </div>

          <div className={logInHidden ? "hidden" : "login"}>
               <form className="auth" onSubmit={handleLogInSubmit}>
                    <label>Username: </label>
                    <input type="text" name="email" onChange={handleInputOnChange}/>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={handleInputOnChange}/><br />
                    <input type="submit" value="Log in"/>
               </form>
          </div>
          </>
     )
}

export default Header;

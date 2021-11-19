import React, { useState } from 'react'
import '../css/header.css'

const Header = (params) => {
     return (
          <>
          <div className="header">
               <h1>Travelr</h1>

               <div className="button-container">
                    <button>Create Account</button>
                    <button>Log In</button>
               </div>
          </div>

          <div className="create-account hidden">
               <form className="auth">
                    <label>Username: </label>
                    <input type="text" name="email" />
                    <label>Password: </label>
                    <input type="password" name="password" /> 
               </form>
          </div>
          
          <div className="login">
               <form className="auth">
                    <label>Username: </label>
                    <input type="text" name="email" />
                    <label>Password: </label>
                    <input type="password" name="password" /> 
               </form>
          </div>
          </>
     )
}

export default Header;
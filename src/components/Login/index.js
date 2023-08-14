import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./index.css"




const Login = () => {

const [username, setUsername]= useState("")
const [userPassword, setUserpassword] = useState("")
const [showSubmitError, setShowSubmitError] = useState(false);
const [errorMsg, showErrorMsg] = useState("");

const navigate = useNavigate()



const onchangeusername = (event) => {
    setUsername(event.target.value)
}

const onchangeuserPassword = (event) =>{
setUserpassword(event.target.value)
}

const onSubmitSuccess = () => {
  navigate("/",{replace: true})
}

  const onSubmitFailure = errorMsg =>{
    setShowSubmitError(true);
    showErrorMsg(errorMsg)
  }

  const submitForm = async event =>{
    event.prevenDefault();
    const userDetails = {username, userPassword};
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),

    };


    
      const response = await fetch (url,options);
      const data = await response.json();
      console.log(data)
  
      if (response.ok === true) {
        onSubmitSuccess();

      } else {
        onSubmitFailure(data.error_msg)
      }
    }
  

  



  return (
    <div className='login-form-container'>
        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' alt='website logo' className='login-website-logo-mobile-img' />
        <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-img"
        alt="website login"
      />
      <form className='form-container' onSubmit={submitForm} >
        <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' alt='website logo' className='login-website-logo-desktop-img' />
        <div className='input-container'>
            <label className='input-label' htmlFor='username'>
            USERNAME
            </label>
            <input className='username-input-field' id='username' type='text' placeholder='Username' onChange={onchangeusername} value={username} />
        </div>
        <div className='input-container'>
        <label className='input-label' htmlFor='username'>
            PASSWORD
            </label>
            <input className='password-input-field' id='password' type='password' placeholder='Password' onChange={onchangeuserPassword} value={userPassword} />
        </div>
        <button className='login-button' type='button'>Login</button>
        {showSubmitError && <p>*{errorMsg}</p>}
      </form>
     
     
    </div>
  )
}

export default Login

import React from 'react'
import { LoginAPI } from '../api/AuthAPI'
import '../sass/LoginComponent.scss'

export default function LoginComponent() {
  const login = () => {
    let res = LoginAPI();
    console.log(res);
  };
  return (
    <div>
      <h1>LoginComponent</h1>
      <input className='common-input' placeholder='Enter your Email' />
      <button onClick={login} className='login-btn'>Login to Leetcademy</button>
    </div>
  )
}

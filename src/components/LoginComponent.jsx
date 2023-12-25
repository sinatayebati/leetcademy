import React, { useState } from 'react';
import { LoginAPI, RegisterAPI } from '../api/AuthAPI';
import '../sass/LoginComponent.scss';
import GoogleButton from 'react-google-button';
import LeetCademyLogo from '../assets/LeetCademy-logos/LeetCademy-logos_black.png';
import { toast } from 'react-toastify';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed in to LeetCademy!")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login-container'>
      <img src={LeetCademyLogo} className='LeetCademyLogo'/>
      <div className='login-wrapper'>
        <h1>Sign in</h1>
        <p>Stay updated on your academic world</p>
        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type='email'
            className='common-input'
            placeholder='Email or Phone'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type='password'
            className='common-input'
            placeholder='Password'
          />
        </div>
        <button onClick={login} className='login-btn'>
          Sign In
        </button>

        <hr className="hr-text" data-content="or"></hr>

        <div className="google-btn-container">
          <GoogleButton
            className='google-btn'
            onClick={() => {
              console.log('Google button clicked')
            }}
          />
          <p className='go-to-signup'>
            New to LeetCademy? <span className='join-now'>Join now</span>
          </p>
        </div>   
      </div>
    </div>
  );
}

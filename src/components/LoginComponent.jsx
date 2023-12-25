import React, { useState } from 'react';
import { LoginAPI, RegisterAPI } from '../api/AuthAPI';
import '../sass/LoginComponent.scss';
import GoogleButton from 'react-google-button';
import LeetCademyLogo from '../assets/LeetCademy-logos/LeetCademy-logos_black.png';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res?.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login-container'>
      <img src={LeetCademyLogo} className='LeetCademyLogo'/>
      <div className='login-wrapper'>
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            className='common-input'
            placeholder='Email or Phone'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
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
        </div>   
      </div>
    </div>
  );
}

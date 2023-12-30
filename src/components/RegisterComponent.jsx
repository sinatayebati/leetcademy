import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI';
import '../sass/RegisterComponent.scss';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import LeetCademyLogo from '../assets/LeetCademy-logos/LeetCademy-logos_black.png';
import { toast } from 'react-toastify';

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created!")
      navigate('/home')
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your account")
    }
  };
  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate('/home')
  };

  return (
    <div className='login-container'>
      <img src={LeetCademyLogo} className='LeetCademyLogo'/>
      <div className='login-wrapper'>
        <h1>Make the most of your academic life</h1>
        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type='email'
            className='common-input'
            placeholder='Email or phone number'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type='password'
            className='common-input'
            placeholder='Password (6 or more characters)'
          />
        </div>
        <button onClick={login} className='login-btn'>
          Agree & Join
        </button>

        <hr className="hr-text" data-content="or"></hr>

        <div className="google-btn-container">
          <GoogleButton
            className='google-btn'
            onClick={googleSignIn}
          />
          <p className='go-to-signup'>
            Already on LeetCademy?{" "}
            <span className='join-now' onClick={() => navigate('/')}>
                Sign in
            </span>
          </p>
        </div>   
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { LoginAPI, RegisterAPI } from '../api/AuthAPI';
import '../sass/LoginComponent.scss';

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
      <div className='login-wrapper'>
        <h1>Sign in</h1>
        <p>Stay updated on your professional world</p>
        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            className='common-input'
            placeholder='Enter your Email'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            className='common-input'
            placeholder='Enter your Password'
          />
        </div>
        <button onClick={login} className='login-btn'>
          Sign In
        </button>
      </div>
    </div>
  );
}

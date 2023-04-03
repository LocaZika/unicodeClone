import React from 'react'
import {Login} from '../Login';
import {Register} from '../Register';

export default function LoginForm() {
  return (
    <div className='login-form'>
      <input type="checkbox" id='cb-form-login' />
      <label htmlFor="cb-form-login">
        <span>Login</span>
        <span>Register</span>
      </label>
      <div className="form-group">
        <Login />
        <Register />
      </div>
    </div>
  )
}

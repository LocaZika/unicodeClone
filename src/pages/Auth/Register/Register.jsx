import { useState } from 'react'
import { debounce } from '../../../services';
import { post } from '../../../api';
import { useAuth } from '../../../hooks';
import { authSlice } from '../authSlice';

export default function Register() {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [auth, dispatch] = useAuth();
  const {login} = authSlice.actions;
  const handleUsernameChange = debounce((e) => {
    const pattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const username = e.target.value;
    if(pattern.test(username) === true) {
      console.log('Please do not press special characters');
    }else{
      setRegister({...register, username: e.target.value});
    }
  });
  const handleEmailChange = debounce((e) => {
    setRegister({...register, email: e.target.value});
  });
  const handlePasswordChange = debounce((e) => {
    setRegister({...register, password: e.target.value});
  });
  const handleConfirmPasswordChange = debounce((e) => {
    setRegister({...register, confirmPassword: e.target.value});
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let registerData;
    if (register.password === register.confirmPassword){
      registerData = {
        email: register.email,
        password: register.password,
        name: register.username,
      }
      post('register', registerData).then(({res}) => {
        if(res.ok === true){
          post('login', registerData).then(({data}) => {
            localStorage.setItem('token', data.accessToken);
            dispatch(login({email: data.user.email, name: data.user.name}));
          });
        }else{
          console.log('register failed');
        }
      });
    }else{
      console.log('password wrong');
    }
  }
  return (
    <form onSubmit={handleSubmit} className='form-register'>
      <input type="text" placeholder='Username' onChange={handleUsernameChange} />
      <input type="email" placeholder='Email' onChange={handleEmailChange} />
      <input type="password" placeholder='Password' onChange={handlePasswordChange} />
      <input type="password" placeholder='Confirm password' onChange={handleConfirmPasswordChange} />
      <button type="submit">Register</button>
    </form>
  )
}

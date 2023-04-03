import { useState } from 'react'
import { debounce } from '../../../services';
import { post } from '../../../api';
import { useAuth } from '../../../hooks';
import { authSlice } from '../authSlice';

export default function Register() {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [auth, dispatch] = useAuth();
  const {login} = authSlice.actions;
  const handleEmailChange = debounce((e) => {
    setRegister({...register, email: e.target.value});
  });
  const handlePasswordChange = debounce((e) => {
    setRegister({...register, password: e.target.value});
  });
  const handleConfirmPasswordChange = debounce((e) => {
    setRegister({...register, password: e.target.value});
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let registerData;
    if (register.password === register.confirmPassword){
      registerData = {
        email: register.email,
        password: register.password,
      }
    }else{
      console.log('password wrong');
    }
    post('register', registerData).then(({res}) => {
      if(res.ok === true){
        post('login', registerData).then(({data}) => {
          localStorage.setItem('token', data.accessToken);
          dispatch(login({email: register.email}))
        });
      }else{
        console.log('register failed');
      }
    });
  }
  return (
    <form onSubmit={handleSubmit} className='form-register'>
      <input type="email" placeholder='Username' onChange={handleEmailChange} />
      <input type="password" placeholder='Password' onChange={handlePasswordChange} />
      <input type="password" placeholder='Confirm password' onChange={handleConfirmPasswordChange} />
      <button type="submit">Register</button>
    </form>
  )
}

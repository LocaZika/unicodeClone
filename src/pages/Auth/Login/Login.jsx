import { useState } from "react";
import { debounce } from "../../../services";
import { post } from "../../../api";
import { useAuth } from "../../../hooks";
import { authSlice } from "../authSlice";

export default function Login() {
  const [state, setstate] = useState({
    email: '',
    password: '',
    error: {},
  });
  const [auth, dispatch] = useAuth();
  const {login} = authSlice.actions;
  const handleEmailChange = debounce((e) => {
    setstate({...state, email: e.target.value});
  });
  const handlePasswordChange = debounce((e) => {
    setstate({...state, password: e.target.value});
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // let stateData;
    // if (state.email.trim() === ''){
    //   setstate({...state, error: {...state.error, email: 'Please enter your email'}});
    // }else{
    //   stateData = {...stateData, email: state.email};
    // }
    // if (state.email.trim() === ''){
    //   setstate({...state, error: {...state.error, email: 'Please enter your email'}});
    // }else{
    //   stateData = {...stateData, password: state.password};
    // }
    let loginData = {
      email: state.email,
      password: state.password
    };
    post('login', loginData).then(({res, data}) => {
      if (res.status === 200){
        localStorage.setItem('token', data.accessToken);
        dispatch(login({email: data.user.email, name: data.user.name}));
      }
      // else{
      //   setLogin({...login, error: {...login.error, loginError: 'Account not found'}});
      // }
    });
  }
  return (
    <form onSubmit={handleSubmit} className="form-login">
      <input type="email" placeholder='Email' onChange={handleEmailChange} />
      <input type="password" placeholder='Password' onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
  )
}

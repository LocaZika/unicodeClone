import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


export default function useAuth() {
  const authState = useSelector(state => state.auth);
  const isLogin = authState.isLogin;
  const navigate = useNavigate();
  useEffect(() => {
    if(isLogin === true) {
      navigate('/forum');
    };
  }, [isLogin]);
  const authDispatch = useDispatch();
  return [authState, authDispatch]
}

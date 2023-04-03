import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks';

export default function Auth() {
  const [{isLogin}] = useAuth();
  return isLogin === true ? <Outlet /> : <Navigate to={'./login'} />
}

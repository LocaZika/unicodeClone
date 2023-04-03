import { Link } from "react-router-dom";


export default function LoginLink() {
  return (
    <div className='login-link'>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

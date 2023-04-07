import React from 'react'
import { useAuth } from '../../../hooks';
import { authSlice } from '../../../redux/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function User() {
  const [{user}, dispatch] = useAuth();
  const {logout} = authSlice.actions;
  const handleLogout = (e) => {
    e.stopPropagation();
    localStorage.removeItem('token');
    dispatch(logout);
  }
  return (
    <div className='user'>
      <div className="user-img">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="user-name">{user.name}</div>
      <ul className="user-feature">
        <li style={{'--d': 1}}>Account detail</li>
        <li style={{'--d': 2}} onClick={handleLogout}>
          <Link to={'/login'}>Logout</Link>
        </li>
      </ul>
    </div>
  )
}

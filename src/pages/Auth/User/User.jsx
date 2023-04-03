import React from 'react'
import { useAuth } from '../../../hooks';
import { authSlice } from '../authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function User() {
  const [{user}, dispatch] = useAuth();
  const {logout} = authSlice.actions;
  const handleLogout = (e) => {
    e.stopPropagation();
    dispatch(logout);
  }
  return (
    <div className='user'>
      <div className="user-img">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="user-name">{user.name}</div>
      <ul className="user-feature">
        <li>Account detail</li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  )
}

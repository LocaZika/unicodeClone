import React from 'react';
import {ReactComponent as Logo} from '../../imgs/unicode-logo.svg';
import './header.scss';
import { User, LoginLink } from '../Auth';
import { useAuth } from '../../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export default function Header() {
  const [{isLogin}] = useAuth();
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>
          <Logo />
        </Link>
      </div>
      <div className="header-features">
        <div className="header-features__links">
          <a
            href={'https://www.facebook.com/locazika/'}
            target='_blank'
            rel='noreferrer'
          >Facebook</a>
          <div className="notification">
            <FontAwesomeIcon icon={faBell} beatFade />
          </div>
          {
            isLogin === false ? <LoginLink /> : <User />
          }
        </div>
        {/* <div className="header-features__display"></div> */}
      </div>
    </header>
  )
}

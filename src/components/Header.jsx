import React from 'react';
import logo from '../imgs/unicode-logo.svg';
import '../sass/header.scss';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Unicode logo" />
      </div>
    </header>
  )
}

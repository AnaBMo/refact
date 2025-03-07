import React from 'react';
import logo from '../assets/cocretainc.jpg'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Cocreta INC Logo" className="logo" />
    </header>
  );
};

export default Header;
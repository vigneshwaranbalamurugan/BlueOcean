import React from 'react';
import Image from 'next/image';
import Logo from '@images/favicon.svg';
import headerstyles from '@styles/header.module.css';

const HeaderComponent = () => {
  return (
    <div id="header" className={headerstyles.header}>
      {/* Logo and Title */}
      <div className={headerstyles['logo-container']}>
        <Image
          src={Logo}
          alt="Blue Ocean Logo"
          width={60} 
          height={60}
        />
        <h1>Blue Ocean</h1>
      </div>

      {/* Navigation Links */}
      <ul className={headerstyles['nav-links']}>
        <li>Pricing</li>
        <li>Download</li>
        <li>Integrations</li>
      </ul>

      {/* Signup Button */}
      <button className={headerstyles['signup-button']}>Signup</button>
    </div>
  );
};

export default HeaderComponent;

import React from 'react';
import Image from 'next/image';
import Logo from "@images/favicon.svg";
import RectangleContainer from "@images/footerRectangle1.svg";
import footerstyles from '@styles/footer.module.css';

const FooterComponent = () => {
  return (
    <div id="footer" className={footerstyles.footer}>
      <div className={`${footerstyles.rectangle} ${footerstyles.firstRectangle}`}></div> 
      <div className={`${footerstyles.rectangle} ${footerstyles.firstRectangle}`}></div> 
      <div className={`${footerstyles.rectangle} ${footerstyles.firstRectangle}`}></div> 
      <div className={`${footerstyles.rectangle} ${footerstyles.firstRectangle}`}></div> 

      {/* Main Footer Content */}
      <div className={footerstyles['footer-content']}>
    
          {/* Logo Section */}
        <div className={footerstyles['logo-container']}>
            <Image src={Logo} alt="Blue Ocean Logo" width={150} height={150} />
            <h2>Blue Ocean</h2>
            <p>Manage and Store with Blue Ocean</p>
        </div>
        
        {/* Quick Links */}
        <div className={footerstyles['quick-links']}>
          <p>Explore</p>
          <ul>
            <li>Cloud</li>
            <li>YouTube Integration</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className={footerstyles['follow-us']}>
          <p>Follow us</p>
          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={footerstyles['footer-bottom']}>
        <p>Copyright © BlueOcean 2025 All Rights Reserved</p>
        <ul>
          <li>Cookies</li>
          <li>Privacy Policy</li>
          <li>Security</li>
          <li>Legal Documents</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterComponent;

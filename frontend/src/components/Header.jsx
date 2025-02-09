'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { Menu, X } from 'lucide-react';
import Logo from '@images/favicon.svg';
import headerstyles from '@styles/header.module.css';
import "@lib/fontawesome.js";

const HeaderComponent = () => {

  const navigationLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/download', label: 'Download' },
    { href: '/integrations', label: 'Integrations' },
  ];
  
  const signupButton = {
    href: '/signup',
    label: 'SignIn / SignUp',
  };
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div id="header" className={headerstyles.header}>
        {/* Logo and Title */}
        <div className={headerstyles['logo-container']}>
          <Image
            src={Logo}
            alt="Blue Ocean Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />
          <h1>Blue Ocean</h1>
        </div>
  
        {/* Mobile Menu Button */}
        <button 
          className={`${headerstyles['menu-button']} md:hidden`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
  
        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
  
        {/* Desktop Signup Button */}
        <Link href={signupButton.href} className="hidden md:block">
          <button className={headerstyles['signup-button']}>
            {signupButton.label}
          </button>
        </Link>
      </div>
  
      {/* Mobile Side Navigation */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={closeMenu}
          />
  
          {/* Side Navigation Menu */}
          <div className={`${headerstyles['side-nav']} fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <button 
                onClick={closeMenu}
                className="p-4 self-end"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
  
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col px-6 py-4">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="py-3 text-lg hover:text-gray-600"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
  
              {/* Mobile Signup Button */}
              <Link 
                href={signupButton.href} 
                className="mt-auto px-6 pb-8"
                onClick={closeMenu}
              >
                <button className={`${headerstyles['signup-button']} w-full`}>
                  {signupButton.label}
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
  
};

export default HeaderComponent;
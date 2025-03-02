"use client";
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(true);
  }
  const handleCloseNav = () => {
    setShowNav(false);
  }

  return (
    <>
      <Nav openNav={handleToggleNav} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </>
  );
}

export default ResponsiveNav;

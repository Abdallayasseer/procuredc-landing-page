"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Links from './Links';

type Props = {
  openNav: () => void,
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY > 100);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 h-[14vh] ${navBg ? "bg-white shadow-md" : "bg-transparent"}`}>
      <nav className="flex pt-6 items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="#">
            <img className="w-[51px] h-[44px]" src="/Logo.png" alt="Logo" loading="lazy" />
          </Link>
        </div>
        <Links />
        {/* Buttons */}
        <div className="lg:flex items-center space-x-4 w-full md:w-[32%] hidden">
          <button className="px-6 py-2 md:px-8 md:py-2.5 text-blue-500 font-semibold text-base border border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300 rounded-2xl">
            Sign In
          </button>
          <button className="px-6 py-2 md:px-8 md:py-2.5 text-white font-semibold text-base bg-gradient-to-r from-[#143AA2] to-[#3E8DE3] hover:opacity-80 transition-all duration-300 rounded-2xl">
            Request a Demo
          </button>
        </div>
        {/* Burger Menu (Mobile) */}
        <HiBars3BottomRight onClick={openNav} className="w-15 h-15 cursor-pointer text-black lg:hidden" />
      </nav>
    </header>
  );
}

export default Nav;

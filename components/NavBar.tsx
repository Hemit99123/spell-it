'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SpellItLogo from './assets/spell-it.png';

const NavBar = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <Image loading="lazy" src={SpellItLogo} className="h-12 w-12 rounded-full" alt="SpellIt Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Spell It!</span>
        </div>
        <div className="flex md:order-2 space-x-3 items-center">
            <div className="flex items-center space-x-2">
              <a href="/create-post" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                Create a post
              </a>
            </div>
        
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/" className="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-black md:p-0" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-black md:p-0">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default NavBar;

import React, { useState } from 'react';
import nsccnavbar from '../assets/nsccnavbar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-4 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        <div className="flex items-center">
          <img src={nsccnavbar} alt="NSCC Navbar Logo" className="h-10 mr-2 sm:mr-4" />
          <span className="font-bold text-xl">NSCC</span>
        </div>

        
        <div className="flex sm:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Home</a>
          <a href="/domains" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Domains</a>
          <a href="/community" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Community</a>
          <a href="/timelines" className="block sm:inline-block py-2 px-4 hover:text-gray-300">Timelines</a>
          <a href="/faq" className="block sm:inline-block py-2 px-4 hover:text-gray-300">FAQ</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

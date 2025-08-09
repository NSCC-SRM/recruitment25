import React, { useState, useEffect } from 'react';
import nsccnavbar from '../assets/nsccnavbar.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "#", label: "Home", icon: "" },
    { href: "#domains", label: "Domains", icon: "" },
    { href: "#community", label: "Community", icon: "" },
    { href: "#timeline", label: "Timeline", icon: "" },
    { href: "#faq", label: "FAQ", icon: "" }
  ];

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-[#26E8E8]/10' 
          : 'bg-black/60 backdrop-blur-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Section */}
            <a 
              href="https://www.instagram.com/nscc_srm/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#26E8E8]/20 to-transparent rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img 
                  src={nsccnavbar} 
                  alt="NSCC Navbar Logo" 
                  className="relative h-12 w-12 lg:h-14 lg:w-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" 
                />
              </div>
              <span className="ml-4 font-bold text-2xl lg:text-3xl text-white hidden md:block tracking-wide">
                <span className="bg-gradient-to-r from-white to-[#26E8E8] bg-clip-text text-transparent">
                  NSCC
                </span>
                <span className="text-gray-300 ml-2">SRM</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative px-6 py-3 text-white/90 hover:text-white transition-all duration-300 group"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="font-medium text-lg">{item.label}</span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] group-hover:w-full transition-all duration-300 rounded-full"></div>
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden relative p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group border border-white/20"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-4 px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 group border border-transparent hover:border-white/20"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span className="font-medium text-lg">{item.label}</span>
                  <div className="ml-auto w-2 h-2 bg-[#26E8E8] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
}

export default Navbar;

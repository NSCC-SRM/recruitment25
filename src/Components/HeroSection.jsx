import React, { useEffect, useState } from 'react';
import Countdown from './Countdown';
import nscchome from '../assets/nscchome.png';
import cube1 from '../assets/cube1.png';
import cube2 from '../assets/cube2.png';
import Emptycomp from './Emptycomp';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'luma-checkout';
    script.src = 'https://embed.lu.ma/checkout-button.js';
    script.async = true;
    document.body.appendChild(script);

    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 mt-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#26E8E8]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-[#26E8E8]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Cubes */}
      <div className="hidden lg:block">
        <img
          src={cube1}
          alt="Glowing Cube"
          className="absolute left-10 bottom-20 w-48 h-48 opacity-60 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <img
          src={cube2}
          alt="Glowing Cube"
          className="absolute right-10 bottom-10 w-64 h-64 opacity-50 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Logo with enhanced animation */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative inline-block mb-8">
              <img 
                src={nscchome} 
                alt="Newton School Coding Club" 
                className="h-48 sm:h-64 lg:h-80 drop-shadow-2xl animate-glow" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#26E8E8]/20 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-white via-[#26E8E8] to-white bg-clip-text text-transparent">
              Newton School
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#26E8E8] via-white to-[#26E8E8] bg-clip-text text-transparent">
              Coding Club SRM
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Where Innovation Meets Code • Building Tomorrow's Tech Leaders
          </p>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              className="group relative px-12 py-5 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] text-black font-bold text-xl rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#26E8E8]/25 luma-checkout--button"
              type="button"
              data-luma-action="checkout"
              data-luma-event-id="evt-Uf3kMJqu4HN88NM"
            >
              <span className="relative z-10">Join NSCC SRM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a9b9b] to-[#26E8E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Stats Section */}
          {/* <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#26E8E8] mb-2">500+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#26E8E8] mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#26E8E8] mb-2">100+</div>
              <div className="text-gray-400">Events Organized</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center text-gray-400 animate-bounce">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

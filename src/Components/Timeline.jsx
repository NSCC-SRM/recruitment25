import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHandHoldingHand, faCircleCheck, faPeopleArrows, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import timelineElements from './timelineElements';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const iconMapping = {
    file: faFile,
    hand: faHandHoldingHand,
    check: faCircleCheck,
    arrow: faPeopleArrows,
    speak: faBullhorn
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 md:py-20" id="timeline">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#26E8E8]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-[#26E8E8]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 md:mb-20 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-[#26E8E8] via-white to-[#26E8E8] bg-clip-text text-transparent">
            Timeline
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Your journey to becoming part of NSCC SRM starts here
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        {/* Central Line - Only visible on desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#26E8E8] via-[#26E8E8]/50 to-transparent"></div>

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-12">
          {timelineElements.map((element, index) => (
            <div
              key={element.key}
              data-index={index}
              className="timeline-item relative"
            >
              {/* Mobile Layout - Centered */}
              <div className="lg:hidden">
                <div className="flex flex-col items-center">
                  {/* Step Number */}
                  <div
                    className={`w-8 h-8 bg-[#26E8E8]/20 border border-[#26E8E8]/50 rounded-full flex items-center justify-center text-[#26E8E8] font-bold text-sm transition-all duration-500 mb-4 ${
                      visibleItems.includes(index)
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-0'
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Central Icon */}
                  <div
                    className={`w-14 h-14 bg-gradient-to-br from-[#26E8E8] to-[#26E8E8]/70 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 mb-6 ${
                      visibleItems.includes(index)
                        ? 'scale-100 rotate-0'
                        : 'scale-0 rotate-180'
                    } hover:scale-110 z-20`}
                  >
                    <FontAwesomeIcon
                      icon={iconMapping[element.img]}
                      className="text-black text-lg"
                    />
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`w-full max-w-sm transition-all duration-1000 ${
                      visibleItems.includes(index)
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-10'
                    }`}
                  >
                    <div className="bg-black/80 backdrop-blur-sm border-2 border-[#26E8E8]/30 rounded-2xl p-6 relative overflow-hidden group hover:border-[#26E8E8]/60 transition-all duration-300">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#26E8E8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Content */}
                      <div className="relative z-10 text-center">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#26E8E8] transition-colors duration-300">
                          {element.title}
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                          {element.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Alternating */}
              <div className="hidden lg:flex items-center">
                {/* Timeline Card */}
                <div
                  className={`relative w-full max-w-md transition-all duration-1000 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-10'
                  } ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}
                >
                  <div className="bg-black/80 backdrop-blur-sm border-2 border-[#26E8E8]/30 rounded-3xl p-8 relative overflow-hidden group hover:border-[#26E8E8]/60 transition-all duration-300">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#26E8E8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#26E8E8] transition-colors duration-300">
                        {element.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {element.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`absolute top-8 w-6 h-6 bg-black border-2 border-[#26E8E8]/30 transform rotate-45 ${
                        index % 2 === 0 ? '-right-3' : '-left-3'
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Central Icon */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#26E8E8] to-[#26E8E8]/70 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
                    visibleItems.includes(index)
                      ? 'scale-100 rotate-0'
                      : 'scale-0 rotate-180'
                  } hover:scale-110 z-20`}
                >
                  <FontAwesomeIcon
                    icon={iconMapping[element.img]}
                    className="text-black text-xl"
                  />
                </div>

                {/* Step Number */}
                <div
                  className={`absolute ${
                    index % 2 === 0 ? 'right-4' : 'left-4'
                  } top-4 w-8 h-8 bg-[#26E8E8]/20 border border-[#26E8E8]/50 rounded-full flex items-center justify-center text-[#26E8E8] font-bold text-sm transition-all duration-500 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-0'
                  }`}
                >
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End Marker */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-[#26E8E8] to-[#26E8E8]/70 rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

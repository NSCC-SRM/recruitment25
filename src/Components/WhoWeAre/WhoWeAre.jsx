import React, { useState, useEffect } from 'react';
import WhoWeAre_outline from '../../assets/logo.png';

export default function WhoWeAre() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1000);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const largeText = "Welcome to Newton School Coding Club SRM! We're proud to offer an excellent platform for students who want to do well in coding and technology. Our club has three parts: Technical, Creatives and Non-Technical. Each part helps you learn and grow in different ways. We organize fun events that teach you a lot. Join SRM's most hyped coding club where you can develop skills, network and work on projects together! Use your coding talents in our hackathons and challenges. Get guidance from experts and be part of an energetic community. Boost your passion for technology, explore career paths and make a name for yourself in innovation. Experience creativity, teamwork and unlock your potential in the exciting world of coding!";

    const smallText = "Welcome to Newton School Coding Club SRM! We're proud to offer an excellent platform for students who want to do well in coding and technology. Our club has three parts: Technical, Creatives and Non-Technical. Each part helps you learn and grow in different ways.";

    return (
        <div id="community" className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#26E8E8]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#26E8E8]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Section Header */}
            <div className="relative z-10 text-center mb-20">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#26E8E8] via-white to-[#26E8E8] bg-clip-text text-transparent">
                        Who We Are
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover the story behind SRM's most innovative coding community
                </p>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                Building Tomorrow's <span className="text-[#26E8E8]">Tech Leaders</span>
                            </h2>
                            
                            <p className={`text-lg lg:text-xl text-gray-300 leading-relaxed ${
                                isSmallScreen ? 'content-sm' : ''
                            }`}>
                                {isSmallScreen ? smallText : largeText}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Innovation Hub</h3>
                                    <p className="text-gray-400 text-sm">Cutting-edge projects and hackathons</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">👥</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                                    <p className="text-gray-400 text-sm">Network with like-minded developers</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Skill Development</h3>
                                    <p className="text-gray-400 text-sm">Learn from industry experts</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">💼</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Career Growth</h3>
                                    <p className="text-gray-400 text-sm">Internship and job opportunities</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <a href="https://chat.whatsapp.com/FhPMm8Q0e3OGQWmuP8bZUG?mode=ac_t" target='__blank'><button className="px-8 py-4 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] hover:from-[#1a9b9b] hover:to-[#26E8E8] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Join Our Community
                            </button></a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#26E8E8]/20 to-transparent rounded-full blur-3xl"></div>
                            
                            {/* Main Image */}
                            <img 
                                src={WhoWeAre_outline} 
                                alt="NSCC Community" 
                                className="relative z-10 w-full h-auto max-w-lg mx-auto drop-shadow-2xl animate-float"
                            />
                            
                            {/* Floating Elements */}
                            <div className="absolute top-10 right-10 w-8 h-8 bg-[#26E8E8] rounded-full animate-pulse"></div>
                            <div className="absolute bottom-20 left-10 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 -left-5 w-4 h-4 bg-[#26E8E8]/50 rounded-full animate-pulse delay-2000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
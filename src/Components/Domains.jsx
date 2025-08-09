import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, 
    faHandshake, 
    faPalette, 
    faLaptopCode, 
    faUsers, 
    faLightbulb,
    faRocket,
    faBrain,
    faMagicWandSparkles
} from '@fortawesome/free-solid-svg-icons';
import card from '/src/assets/Domain/card.png';

export default function Domains() {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleToggle = (domain) => {
        setExpandedCard(prevDomain => (prevDomain === domain ? null : domain));
    };

    const domains = [
        {
            id: 'technical',
            title: 'Technical',
            description: 'Enter a realm where technical innovation soars with unmatched strength and agility. Engage in cutting-edge design, dynamic media, and event engineering, forging solutions that push boundaries. Join us in harnessing the power of creativity and technical expertise to shape the future of technology.',
            icon: faCode,
            secondaryIcon: faLaptopCode,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-500/10 to-cyan-500/10'
        },
        {
            id: 'nonTechnical',
            title: 'Non-Technical',
            description: 'Welcome to our dynamic hub where creativity and strategy excel. Our non-technical division thrives through strategic partnerships with businesses and organizations, focusing on securing sponsorships, organizing events, and fostering networking opportunities. This approach enriches our resources, boosts members\' professional development, and creates pathways to internships, jobs.',
            icon: faHandshake,
            secondaryIcon: faUsers,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-500/10 to-emerald-500/10'
        },
        {
            id: 'creatives',
            title: 'Creatives',
            description: 'Explore a world where boundless innovation thrives. Our team crafts breathtaking designs, vibrant artwork, and dynamic media content. Unleash your creativity to collaborate on imaginative projects. Join us on this journey and let your ideas soar to new heights!',
            icon: faPalette,
            secondaryIcon: faMagicWandSparkles,
            color: 'from-purple-500 to-pink-500',
            bgColor: 'from-purple-500/10 to-pink-500/10'
        }
    ];

    return (
        <div id='domains' className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-40 h-40 bg-[#26E8E8]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 left-10 w-32 h-32 bg-[#26E8E8]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>

            {/* Section Header */}
            <div className="relative z-10 text-center mb-20">
                <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-[#26E8E8] via-white to-[#26E8E8] bg-clip-text text-transparent">
                        Our Domains
                    </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Choose your path and unlock your potential in the world of technology and innovation
                </p>
            </div>

            {/* Domains Grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain) => (
                        <div
                            key={domain.id}
                            className={`group relative transition-all duration-500 transform hover:scale-105 ${
                                expandedCard === domain.id ? 'z-20' : 'z-10'
                            }`}
                        >
                            <div className={`relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${
                                expandedCard === domain.id 
                                    ? 'border-[#26E8E8]/50 shadow-2xl shadow-[#26E8E8]/25' 
                                    : 'hover:border-white/20 hover:shadow-xl'
                            }`}>
                                
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${domain.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    {expandedCard === domain.id ? (
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="text-center mb-6">
                                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${domain.color} rounded-2xl mb-4 text-white shadow-lg`}>
                                                    <FontAwesomeIcon icon={domain.icon} className="text-2xl" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-4">{domain.title}</h3>
                                            </div>
                                            <p className="text-gray-300 text-lg leading-relaxed text-center">
                                                {domain.description}
                                            </p>
                                            <button 
                                                className="mt-6 w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
                                                onClick={() => handleToggle(domain.id)}
                                            >
                                                Show Less
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="text-center mb-6">
                                                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${domain.color} rounded-3xl mb-6 text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                                                    <FontAwesomeIcon icon={domain.icon} className="text-3xl" />
                                                    <div className="absolute -right-2 bottom-5 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
                                                    <div className="absolute -right-2 bottom-36 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
                                                    <div className="absolute bottom-5 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
                                                    <div className="absolute -top-2 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
                                                    <div className="absolute -left-2 w-4 h-4 bg-white/20 rounded-full animate-pulse delay-500"></div>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-4">{domain.title}</h3>
                                            </div>
                                            
                                            <div className="flex-1 flex items-center justify-center mb-6">
                                                <div className="relative">
                                                    {/* Secondary Icon with Glow Effect */}
                                                    {/* <div className={`w-24 h-24 bg-gradient-to-r ${domain.color} rounded-2xl flex items-center justify-center text-white shadow-lg opacity-60 group-hover:opacity-100 transition-all duration-300`}>
                                                        <FontAwesomeIcon icon={domain.secondaryIcon} className="text-2xl" />
                                                    </div> */}
                                                    {/* Floating Elements */}

                                                </div>
                                            </div>
                                            
                                            <button 
                                                className="w-full py-4 bg-gradient-to-r from-[#26E8E8] to-[#1a9b9b] hover:from-[#1a9b9b] hover:to-[#26E8E8] text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                                onClick={() => handleToggle(domain.id)}
                                            >
                                                Learn More
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

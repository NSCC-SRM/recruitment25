import React from 'react';
import NSCCLogo from "../assets/Footer/NSCC.png";
import { FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    const socialLinks = [
        {
            name: "Instagram",
            icon: <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />,
            url: "https://www.instagram.com/nscc_srm/?hl=en",
            color: "hover:text-pink-400 hover:bg-pink-400/10"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />,
            url: "https://www.linkedin.com/company/newton-school-coding-club-srmist/?originalSubdomain=in",
            color: "hover:text-blue-400 hover:bg-blue-400/10"
        },
        {
            name: "Twitter",
            icon: <FaXTwitter className="w-5 h-5 md:w-6 md:h-6" />,
            url: "https://x.com/nsccsrm?lang=en",
            color: "hover:text-blue-300 hover:bg-blue-300/10"
        }
    ];

    const quickLinks = [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#community" },
        { name: "Domains", href: "#domains" },
        { name: "Timeline", href: "#timeline" },
        { name: "FAQs", href: "#faq" }
    ];

    const resources = [
        { name: "Hackathons", href: "#" },
        { name: "Workshops", href: "#" },
        { name: "Projects", href: "#" },
        { name: "Resources", href: "#" }
    ];

    return (
        <footer id="contact" className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-5 w-24 h-24 bg-[#26E8E8]/5 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-5 w-20 h-20 bg-[#26E8E8]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-5">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-3 md:mb-4">
                    
                    {/* Quick Links */}
                    <div className="space-y-4 md:space-y-5 order-1 text-center items-center md:items-start flex flex-col content-center justify-center">
                        <h4 className="text-base md:text-lg font-semibold text-[#26E8E8] md:ml-16 lg:ml-24 xl:ml-36">Quick Links</h4>
                        <div className="space-y-3 md:space-y-4 w-full">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm md:text-base group"
                                >
                                    <span className="relative">
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#26E8E8] group-hover:w-full transition-all duration-300"></span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Brand Section */}
                    <div className="lg:col-span-1 flex flex-col items-center space-y-4 md:space-y-5 order-2 text-center">
                        <div className="flex items-center justify-center space-x-2 md:space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#26E8E8]/20 to-transparent rounded-full blur-lg"></div>
                                <img 
                                    src={NSCCLogo} 
                                    alt="NSCC Logo" 
                                    className="relative w-10 h-8 md:w-12 md:h-10 object-contain" 
                                />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold">
                                    <span className="bg-gradient-to-r from-white to-[#26E8E8] bg-clip-text text-transparent">
                                        NSCC
                                    </span>
                                    <span className="text-gray-300 ml-1">SRM</span>
                                </h3>
                                <p className="text-gray-400 text-xs">Newton School Coding Club</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                            Building tomorrow's tech leaders through innovation, collaboration, and cutting-edge technology. Join the most hyped coding community at SRM.
                        </p>
                        
                        <div className="flex justify-center space-x-3 md:space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`bg-white/10 p-2 md:p-2.5 rounded-xl transition-all duration-300 hover:scale-110 border border-white/20 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4 md:space-y-5 md:ml-18 order-3 text-center md:text-left items-center md:items-start flex flex-col">
                        <h4 className="text-lg md:text-xl font-semibold text-[#26E8E8]">Get in Touch</h4>
                        <p className="text-gray-300 text-sm md:text-base">
                            Have questions or want to join our community? We'd love to hear from you!
                        </p>
                        
                        <div className="space-y-3 md:space-y-4 w-full">
                            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-3 group">
                                <div className="bg-white/10 p-2 md:p-2.5 rounded-xl group-hover:bg-[#26E8E8]/20 transition-all duration-300 border border-white/20">
                                    <IoMdMail className="w-5 h-5 md:w-6 md:h-6 text-[#26E8E8]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 mb-1">Email</p>
                                    <a 
                                        href="mailto:nscc@srmist.edu.in" 
                                        className="text-white hover:text-[#26E8E8] transition-colors duration-300 text-sm md:text-base font-medium"
                                    >
                                        nscc@srmist.edu.in
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-3 group">
                                <div className="bg-white/10 p-2 md:p-2.5 rounded-xl group-hover:bg-[#26E8E8]/20 transition-all duration-300 border border-white/20">
                                    <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5 text-[#26E8E8]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 mb-1">Phone</p>
                                    <div className="text-white text-sm md:text-base font-medium">
                                        <div>+91 62309 31075</div>
                                        <div>+91 87890 19185</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-4 md:pt-5">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-xs">
                                © 2025 NSCC SRM. All rights reserved.
                            </p>
                        </div>
                        
                        <div className="flex space-x-3 md:space-x-5">
                            <a href="#" className="text-gray-400 hover:text-[#26E8E8] text-xs transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#26E8E8] text-xs transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#26E8E8] text-xs transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
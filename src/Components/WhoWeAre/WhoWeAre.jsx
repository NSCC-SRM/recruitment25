import React, { useState, useEffect } from 'react';
import './WhoWeAre.css';
import WhoWeAre_outline from '../../assets/WhoWeAre.png';

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
        <div id="community">
            <p className='head'>Who We Are!</p>
            <div className='whoweare_content'>
                <div className='outline_box'>
                    <img src={WhoWeAre_outline} alt="" />
                    <p className={`content ${isSmallScreen ? 'content-sm' : ''}`}>
                        {isSmallScreen ? smallText : largeText}
                    </p>
                </div>
            </div>
        </div>
    );
}
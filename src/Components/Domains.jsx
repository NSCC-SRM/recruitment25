import React, { useState } from 'react';
import './Domain.css';

export default function Domains() {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleToggle = (domain) => {
        setExpandedCard(prevDomain => (prevDomain === domain ? null : domain));
    };

    const handleContentClick = (event, domain) => {
        event.stopPropagation(); 
        handleToggle(domain);
    };

    return (
        <div id='domains'>
            <p className="Domain">Domains</p>
            <div className="cards">
                <div className="card">
                    <div className="card-content">
                        {expandedCard === 'technical' ? (
                            <div className="text" onClick={(e) => handleContentClick(e, 'technical')}>
                                <p id='technical-card'>
                                    Enter a realm where technical innovation soars with unmatched strength and agility. Engage in cutting-edge design, dynamic media, and event engineering, forging solutions that push boundaries. Join us in harnessing the power of creativity and technical expertise to shape the future of technology.
                                </p>
                            </div>
                        ) : (
                            <>
                                <img className="card-image" src='/src/assets/Domain/card.png' alt="Technical Domain" />
                                <h2 className="card-title">Technical</h2>
                                <button className="button" onClick={() => handleToggle('technical')}>Know more</button>
                            </>
                        )}
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        {expandedCard === 'nonTechnical' ? (
                            <div className="text" onClick={(e) => handleContentClick(e, 'nonTechnical')}>
                                <p id="non-technical-card">
                                    Welcome to our dynamic hub where creativity and strategy excel. Our non-technical division thrives through strategic partnerships with businesses and organizations, focusing on securing sponsorships, organizing events, and fostering networking opportunities. This approach enriches our resources, boosts members' professional development, and creates pathways to internships, jobs.
                                </p>
                            </div>
                        ) : (
                            <>
                                <img className="card-image" src='/src/assets/Domain/card.png' alt="Non-Technical Domain" />
                                <h2 className="card-title" id='Non-technical-title'>Non-Technical</h2>
                                <button className="button" onClick={() => handleToggle('nonTechnical')}>Know more</button>
                            </>
                        )}
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        {expandedCard === 'creatives' ? (
                            <div className="text" onClick={(e) => handleContentClick(e, 'creatives')}>
                                <p id='creatives-card'>
                                    Explore a world where boundless innovation thrives. Our team crafts breathtaking designs, vibrant artwork, and dynamic media content. Unleash your creativity to collaborate on imaginative projects. Join us on this journey and let your ideas soar to new heights!
                                </p>
                            </div>
                        ) : (
                            <>
                                <img className="card-image" src='/src/assets/Domain/card.png' alt="Creatives Domain" />
                                <h2 className="card-title">Creatives</h2>
                                <button className="button" onClick={() => handleToggle('creatives')}>Know more</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

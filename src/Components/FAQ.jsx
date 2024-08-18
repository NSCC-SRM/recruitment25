import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './FAQ.css'
import { useState } from 'react';

const FAQ = () => {

    const [check, setCheck] = useState('hidden')
    const [arrow1, setarrow1] = useState(<FontAwesomeIcon icon={faAngleDown} />);
    const [arrow2, setarrow2] = useState(<FontAwesomeIcon icon={faAngleDown} />);
    const [arrow3, setarrow3] = useState(<FontAwesomeIcon icon={faAngleDown} />);
    const [arrow4, setarrow4] = useState(<FontAwesomeIcon icon={faAngleDown} />);
    const [arrow5, setarrow5] = useState(<FontAwesomeIcon icon={faAngleDown} />);
    const [arrow6, setarrow6] = useState(<FontAwesomeIcon icon={faAngleDown} />);

    function show1() {
        let element = document.getElementById('a');
        if (check == "hidden") {
            element.style.display = 'flex';
            setCheck("show");
            setarrow1(<FontAwesomeIcon icon={faAngleUp} />);
        }
        else {
            element.style.display = 'none';
            setCheck("hidden");
            setarrow1(<FontAwesomeIcon icon={faAngleDown} />);
        }
    }
    function show2() {
        let element = document.getElementById('b');
        if (check == "hidden") {
            element.style.display = 'flex';
            setCheck("show");
            setarrow2(<FontAwesomeIcon icon={faAngleUp} />);
        }
        else {
            element.style.display = 'none';
            setCheck("hidden");
            setarrow2(<FontAwesomeIcon icon={faAngleDown} />);
        }
    }
    function show3() {
        let element = document.getElementById('c');
        if (check == "hidden") {
            element.style.display = 'flex';
            setCheck("show");
            setarrow3(<FontAwesomeIcon icon={faAngleUp} />);
        }
        else {
            element.style.display = 'none';
            setCheck("hidden");
            setarrow3(<FontAwesomeIcon icon={faAngleDown} />);
        }
    }
    function show4() {
        let element = document.getElementById('d');
        if (check == "hidden") {
            element.style.display = 'flex';
            setCheck("show");
            setarrow4(<FontAwesomeIcon icon={faAngleUp} />);
        }
        else {
            element.style.display = 'none';
            setCheck("hidden");
            setarrow4(<FontAwesomeIcon icon={faAngleDown} />);
        }
    }
    function show5() {
        let element = document.getElementById('e');
        if (check == "hidden") {
            element.style.display = 'flex';
            setCheck("show");
            setarrow5(<FontAwesomeIcon icon={faAngleUp} />);
        }
        else {
            element.style.display = 'none';
            setCheck("hidden");
            setarrow5(<FontAwesomeIcon icon={faAngleDown} />);
        }
    }
    function show6() {
        let element = document.getElementById('f');
        if (check == "hidden") {
            element.style.display = 'flex';
            setCheck("show");
            setarrow6(<FontAwesomeIcon icon={faAngleUp} />);
        }
        else {
            element.style.display = 'none';
            setCheck("hidden");
            setarrow6(<FontAwesomeIcon icon={faAngleDown} />);
        }
    }

    return (
        <div className='main' id='faq'>
            <div className='heading'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div>
                <div className='sections' onClick={show1}>
                    <p>What is NSCC?</p>
                    <button>{arrow1}</button>
                </div>
                <div className='answers' id='a'>
                    NSCC (Newton School of Coding Club) is a vibrant community at SRM where technology
                    and innovation converge. With three specialized domains—Tech, Non-Tech, and
                    Creatives—the club offers a platform for students to enhance their skills, collaborate on
                    projects, and explore the cutting edge of coding.

                </div>
                <div className='sections' onClick={show2}>
                    <p>What can one hope to gain from being a member of NSCC? </p>
                    <button>{arrow2}</button>
                </div>
                <div className='answers' id='b'>
                    By joining NSCC, members gain advanced coding skills, engage in hands-on experiences
                    through hackathons and ideathons, and connect with senior experts for valuable mentorship.
                    The club also opens doors to career opportunities and fosters personal growth in the tech
                    field.

                </div>
                <div className='sections' onClick={show3}>
                    <p> How is the club structured, and what are the roles and responsibilities of its members?</p>
                    <button>{arrow3}</button>
                </div>
                <div className='answers' id='c'>
                    NSCC’s structure includes Members, Associates, Associate Directors, Domain Directors,
                    Joint Secretary, Secretary, Board Members, Founder, and Faculty Incharge. Each role is
                    essential, with responsibilities ranging from coding and event organization to leadership and
                    mentoring. For detailed insights, visit NSCC SRM’s Instagram or website.
                </div>
                <div className='sections' onClick={show4}>
                    <p>What are the primary goals and objectives of the NSCC?</p>
                    <button>{arrow4}</button>
                </div>
                <div className='answers' id='d'>
                    The primary objective of NSCC is to create a supportive environment that nurtures
                    innovation and learning. The club focuses on keeping students updated with technology,
                    offering real-world problem-solving, and excelling in coding and computer science to
                    develop future leaders.
                </div>
                <div className='sections' onClick={show5}>
                    <p>What kind of non-technical skills are emphasized within the club?</p>
                    <button>{arrow5}</button>
                </div>
                <div className='answers' id='e'>
                    NSCC emphasizes the development of non-technical skills such as teamwork, leadership,
                    project management, communication, and creative problem-solving. These skills are crucial
                    for effective collaboration and success in both club activities and professional careers.
                </div>
                <div className='sections' onClick={show6}>
                    <p>How does the club support new members in getting acclimated and involved?</p>
                    <button>{arrow6}</button>
                </div>
                <div className='answers' id='f'>
                    NSCC supports new members through orientation sessions, mentorship from senior experts,
                    and opportunities to participate in events and projects. This approach ensures that newcomers
                    quickly integrate into the club and actively contribute to its community.
                </div>
            </div>
        </div>
    )
}

export default FAQ

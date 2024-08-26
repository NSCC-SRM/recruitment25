import React from 'react';

import NSCCLogo from "../assets/Footer/NSCC.png";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div id='contact' className='text-white bg-black md:bg-gradient-to-r from-[#124a4a] to-[#000000] flex flex-col md:flex-row md:justify-between md:content-center md:items-center gap-y-5 font-roboto md:px-[160px] w-full pt-10 md:pt-0 sm:h-[200px] py-12'>


                <div className='flex flex-col justify-center items-center md:border-0 border-[4px] border-rt1 rounded-xl h-[200px] w-[264px] m-auto md:m-0'>
                    <h1 className='text-rt1 text-[28px]'> Contact: </h1>

                    <div className='flex align-items-center items-center gap-2'>

                        <IoMdMail className='w-[32px] h-[30px]' />
                        <a href="mailto:nscc@srmist.edu.in" className='text-[18px]'>nscc@srmist.edu.in</a>
                    </div>

                    <div className='flex flex-row items-center gap-2'>
                        <FaPhoneAlt className='w-[28px] h-[28px]' />
                        <div className='text-[18px]'>
                            +91 98376 38743<br />
                            +91 99106 18509
                        </div>
                    </div>

                </div>


                <div className='flex flex-col gap-y-4 md:w-[220px] items-center justify-center pt-12'>
                    <h1 className='text-rt1 text-[28px]'> Follow Us:</h1>
                    <div className='flex gap-8 '>

                        <a href="https://www.instagram.com/nscc_srm/?hl=en" target='_blank'> <FaInstagram className='w-[32px] h-[32px]' /></a>
                        <a href="https://www.linkedin.com/company/newton-school-coding-club-srmist/?originalSubdomain=in" target='_blank'> <FaLinkedinIn className='w-[32px] h-[32px]' /></a>
                        <a href="https://x.com/nsccsrm?lang=en" target='_blank'> <FaXTwitter className='w-[28px] h-[30px]' /></a>
                    </div>
                    <div className='box-border border-rt1 border-[3px] flex flex-row rounded-full h-[60px] w-[190px] gap-x-3'>
                        <img src={NSCCLogo} alt="NSCC Logo" className='w-[60px] h-[50px] pt-1' />
                        <p className='text-[17px]'>
                            Developed by:<br />
                            NSCC SRM
                        </p>
                    </div>

                </div>

                <div className='hidden lg:flex flex-col pt-8'>
                    <h1 className='text-rt1 text-[28px] '> Links:</h1>
                    <div className='flex flex-col text-[18px]'>
                        <a href='#'>Home</a>
                        <a href='#community'>About Us</a>
                        <a href='#timeline'>Timeline</a>
                        <a href='#faq'>FAQs</a>

                    </div>
                </div>



            </div>
        </>
    );
}
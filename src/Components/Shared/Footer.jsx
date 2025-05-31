import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoHome } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="dark:bg-gray-900">
            <footer className="footer flex flex-col gap-8 md:gap-12 lg:gap-40  lg:flex-row justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-12 lg:py-16 bg-gradient-to-r from-white to-[#339634] dark:from-gray-800 dark:to-gray-700">
                <nav className="mb-6 md:mb-8 lg:mb-0 flex flex-col items-center lg:items-start mx-auto lg:mx-0 max-w-xs sm:max-w-sm md:max-w-md">
                    <img
                        src="https://i.ibb.co/Kj5dNvzH/STF-Logo-2025.png"
                        alt="Save Tree Foundation Logo"
                        className='h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 dark:filter dark:brightness-0 dark:invert'
                    />
                    <p className='text-sm sm:text-base md:text-lg text-center lg:text-left mt-4 lg:mt-6 dark:text-gray-300 px-4 sm:px-0'>
                        <span className='font-semibold'>Save Tree Foundation</span> is a non-profit organization dedicated to conserving nature and empowering youth through tree plantations, education, and community outreach. "Save Trees For Our Next Generation!"
                    </p>
                </nav>

                <nav className="mb-6 md:mb-8 lg:mb-0 flex-1  mx-auto lg:mx-0">
                    <h6 className="mb-3 w-full sm:mb-4 md:mb-5 text-xl sm:text-2xl md:text-3xl text-white font-bold text-center lg:text-left">About us</h6>
                    <div className="flex flex-col items-center lg:items-start space-y-2 sm:space-y-3">
                        <a className="link link-hover text-sm sm:text-base md:text-lg dark:text-gray-300 hover:text-white">Sponsor a child</a>
                        <a className="link link-hover text-sm sm:text-base md:text-lg dark:text-gray-300 hover:text-white">General Donation</a>
                        <a className="link link-hover text-sm sm:text-base md:text-lg dark:text-gray-300 hover:text-white">Career</a>
                        <a className="link link-hover text-sm sm:text-base md:text-lg dark:text-gray-300 hover:text-white">News and Update</a>
                        <a className="link link-hover text-sm sm:text-base md:text-lg dark:text-gray-300 hover:text-white">Contact us</a>
                    </div>
                </nav>

                <nav className='flex-1  mx-auto lg:mx-0'>
                    <h6 className="text-xl w-full sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-white text-center lg:text-left">Get in Touch</h6>
                    <div className="space-y-2 sm:space-y-3">
                        <p className='text-sm sm:text-base md:text-lg flex gap-2 md:gap-3 dark:text-gray-300'>
                            <span className='text-white text-lg md:text-xl mt-0.5 md:mt-1'><IoHome /></span>
                            Tree Foundation, House#56 <br />
                            Road #8B, Block #H, Banani <br />
                            Dhaka 1234, Bangladesh
                        </p>
                        <p className='text-sm sm:text-base md:text-lg flex items-center gap-2 md:gap-3 dark:text-gray-300'>
                            <span className='text-lg md:text-xl text-white'><MdOutlineEmail /> </span>
                            info@tree.com.bd
                        </p>
                        <p className='text-sm sm:text-base md:text-lg flex items-center gap-2 md:gap-3 dark:text-gray-300'>
                            <span className='text-lg md:text-xl text-white'><FaPhoneAlt /></span>
                            +880 1234567890
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mt-4 sm:mt-5 md:mt-6">
                        <a href="#" className='text-lg md:text-xl bg-white dark:bg-gray-600 p-1.5 sm:p-2 rounded-full text-[#339634] dark:text-white hover:bg-[#339634] hover:text-white dark:hover:bg-gray-500 transition-colors'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='text-lg md:text-xl bg-white dark:bg-gray-600 p-1.5 sm:p-2 rounded-full text-[#339634] dark:text-white hover:bg-[#339634] hover:text-white dark:hover:bg-gray-500 transition-colors'>
                            <FaTwitter />
                        </a>
                        <a href="#" className='text-lg md:text-xl bg-white dark:bg-gray-600 p-1.5 sm:p-2 rounded-full text-[#339634] dark:text-white hover:bg-[#339634] hover:text-white dark:hover:bg-gray-500 transition-colors'>
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className='text-lg md:text-xl bg-white dark:bg-gray-600 p-1.5 sm:p-2 rounded-full text-[#339634] dark:text-white hover:bg-[#339634] hover:text-white dark:hover:bg-gray-500 transition-colors'>
                            <FaYoutube />
                        </a>
                        <a href="#" className='text-lg md:text-xl bg-white dark:bg-gray-600 p-1.5 sm:p-2 rounded-full text-[#339634] dark:text-white hover:bg-[#339634] hover:text-white dark:hover:bg-gray-500 transition-colors'>
                            <FiInstagram />
                        </a>
                    </div>
                </nav>
            </footer>

            <footer className="footer footer-center bg-[#2b2f3a] dark:bg-gray-800 text-white p-4 sm:p-5">
                <aside>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
                        Copyright © {new Date().getFullYear()} - All right reserved by Save Tree Foundation
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
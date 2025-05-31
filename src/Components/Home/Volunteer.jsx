import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Volunteer = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className='relative'>
            <div className='relative'>
                {/* Top Section */}
                <div className='text-white flex flex-col items-center gap-6 py-16 px-6 md:gap-10 md:py-28 md:px-12 lg:px-44'>
                    <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl'>Volunteerism</h2>
                    <p className='text-lg text-center md:text-xl lg:text-2xl'>
                        With an aim to mobilize the youth to build a better nation, we have empowered more than
                        <span className='text-[#339634] font-bold italic'> 55,000</span> young changemakers from all across Bangladesh.
                    </p>
                </div>

                {/* Centered Number Div - Optimized for Mobile & Desktop */}
                <div className='absolute left-1/2 -translate-x-1/2 lg:top-1/2  -translate-y-1/2 w-[90%] max-w-[500px] mx-auto'>
                    <div
                        className='bg-white py-3 px-6 shadow-xl shadow-black/70 rounded-md flex  justify-center items-center z-10'
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className='py-3 px-6 sm:py-5 sm:px-10 border-r-2 '>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'><span className='italic'>55</span>,000</h2>
                            <p className='text-sm sm:text-base text-gray-600'>Nationwide Volunteers</p>
                        </div>
                        <div className='py-3 px-6 sm:py-5 sm:px-10'>
                            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold'>64</h2>
                            <p className='text-sm sm:text-base text-gray-600'>District</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='bg-[#339634] flex flex-col items-center gap-6 py-16 px-6 md:gap-10 md:py-28 md:px-12 lg:px-44 '>
                    <h2 className='text-3xl text-center md:text-4xl lg:text-5xl'>
                        Do you want to work for the <span className='font-bold'>Underprivileged Communities</span>?
                    </h2>
                    <button
                        className="relative text-lg text-white px-5 py-2 rounded-full bg-[#2b2f3a] overflow-hidden group md:text-xl md:px-7"
                      
                    >
                        <span className="relative z-10">Become A National Volunteer</span>
                        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2f3a] to-[#47524b] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
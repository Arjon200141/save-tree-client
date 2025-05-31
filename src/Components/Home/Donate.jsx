import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Donate = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div 
      className='m-4 md:m-8 lg:m-16'
      data-aos="fade-up"
      data-aos-once="false"
    >
      <div className="rounded-xl bg-white">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
          <img
            src="https://i.ibb.co.com/pvqFBZxM/482240764-990666973216350-3838025739885130842-n.jpg"
            className="w-full lg:w-[500px] h-auto lg:h-[450px] object-cover rounded-t-xl lg:rounded-bl-2xl lg:rounded-tr-none pb-0 lg:pb-8"
            alt="Donation cause"
          />
          <div className='bg-white p-4 lg:p-0'>
            <h1 className="text-2xl md:text-3xl mt-4 lg:mt-12 font-bold">Donate This Foundation</h1>
            <p className="py-4 text-sm md:text-lg text-justify mr-10">
            Your contribution can plant hope for a greener future. At Save Tree Foundation, every donation supports tree plantation drives, environmental education for youth, and impactful community outreach programs. By donating, you’re not just giving money—you’re nurturing nature, empowering future generations, and taking a stand for a healthier planet.
            </p>
            <p className='text-lg font-semibold'> Together, we can Save Trees for Our Next Generation!</p>
            <p className='text-lg'>Be a part of the change. Every tree planted starts with your support.</p>
            <button className="bg-[#339634] text-white btn p-4 md:p-6 rounded-full text-lg md:text-xl shadow-none mt-4 lg:mt-10 w-full sm:w-auto">
              Sponsor a Tree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
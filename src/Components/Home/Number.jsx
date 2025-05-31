import React from 'react';

const Number = () => {
    return (
        <div className='w-full h-[50vh] relative flex justify-center items-center'>
            <div className='h-[60%] w-[30vh] bg-green-500/50 rounded-full absolute blur-3xl'></div>
            <div className='text-white text-center flex flex-col justify-center items-center h-full gap-7 relative z-10'>
                <h2 className='lg:text-5xl text-3xl font-bold '>Number of Unsponsored Tree</h2>
                <p className='lg:text-5xl text-3xl font-bold'>1100</p>
                <p className='bg-[#339634] py-2 px-7 rounded-full lg:text-2xl text-xl'>Sponsor A Tree Today</p>
            </div>
        </div>
    );
};

export default Number;
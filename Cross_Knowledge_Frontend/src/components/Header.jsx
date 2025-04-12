import React from 'react';
import assets from '../assets/assets.js';
import { FaArrowRight } from 'react-icons/fa';


const Header = () => {
    return (
        <div className='flex flex-col md:flex-row bg-indigo-600 rounded-lg px-6 md:px-10 lg:px-20 gap-20 mb-20'>
            {/* ----------Left Side---------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight'>
                    Uncover Timeless Knowledge<br />Through the Pages of History
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img src={assets.group_people} alt="group_profiles" className='w-28' />
                    <p>
                        Discover ancient wisdom, learn from the oldest texts ever written,
                        <br /> and let your curiosity guide you like a magnifying glass.
                    </p>
                </div>
                <a
                    href="#speciality"
                    className='bg-white rounded-full flex items-center gap-2 px-8 py-3 text-gray-700 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
                >
                    Start Exploring
                    <FaArrowRight className='text-sm' />
                </a>
            </div>

            {/* ----------Right Side---------- */}
            <div className='md:w-1/2  relative hidden md:block'>
                <img
                    src={assets.tradition1}
                    alt="header_img"
                    className='absolute top-1/2 left-0 transform -translate-y-1/2 md:h-auto rounded-lg'
                />
            </div>
        </div>
    );
};

export default Header;

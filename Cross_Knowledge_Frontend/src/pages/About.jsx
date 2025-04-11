import React from 'react';
import MandalaMakingImg2 from '../assets/Mandala_making_img2.jpg';

const About = () => {
  return (
    <div className="px-6 md:px-16">
      {/* Heading */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-indigo-600 font-semibold'>KALAPATH</span></p>
      </div>

      {/* Section 1: Mandala Image */}
      <div className='flex my-10 flex-col md:flex-row gap-12'>
        <img 
          src={MandalaMakingImg2}
          alt="mandala_art" 
          className='w-full md:max-w-[360px] rounded shadow-md' 
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            <b className='text-indigo-600'>Kalapath</b> is a platform dedicated to reviving India's forgotten art forms—by giving voice to real artisans and making traditional skills learnable for the modern generation.
          </p>
          <p>
            From mandala making to lost tribal arts, every skill you learn here carries the story of a region, a culture, and a legacy that deserves to live on.
          </p>
          <p>
            At Kalapath, we believe that ancient hands can still shape modern futures.
          </p>
        </div>
      </div>

      {/* Section 2: Painting Sculpture Image */}
      <div className='flex my-10 flex-col-reverse md:flex-row gap-12'>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <b className='text-indigo-600'>Our Mission</b>
          <p>
            To create opportunities for artisans to pass down rare, traditional knowledge—and for learners to gain something beyond what's searchable.
          </p>
          <p>
            When you choose Kalapath, you aren’t just learning—you’re reviving an art, honoring an artist, and preserving a culture.
          </p>
        </div>

        <img 
          src="https://images.pexels.com/photos/9974411/pexels-photo-9974411.jpeg" 
          alt="painting sculpture" 
          className='w-full md:max-w-[360px] rounded shadow-md' 
        />
      </div>

      {/* Why Choose Us */}
      <div className='text-xl my-4 text-gray-700'>
        <p>WHY <span className='font-semibold text-indigo-600'>CHOOSE KALAPATH</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 mt-10 gap-4'>
        <div className='border px-10 md:px-12 py-8 sm:py-12 flex flex-col gap-4 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 cursor-pointer text-gray-700 rounded-xl shadow-sm'>
          <b>Preserve Culture</b>
          <p>Each course supports a living artisan and keeps a heritage alive.</p>
        </div>
        <div className='border px-10 md:px-12 py-8 sm:py-12 flex flex-col gap-4 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 cursor-pointer text-gray-700 rounded-xl shadow-sm'>
          <b>Learn Authentically</b>
          <p>Learn from experts who inherited their craft—not searched it.</p>
        </div>
        <div className='border px-10 md:px-12 py-8 sm:py-12 flex flex-col gap-4 hover:bg-indigo-50 hover:text-indigo-700 transition-all duration-300 cursor-pointer text-gray-700 rounded-xl shadow-sm'>
          <b>Empower Communities</b>
          <p>Real stories. Real teachers. Real impact on rural livelihoods.</p>
        </div>
      </div>

      {/* Closing Thought */}
      <p className='italic text-sm text-center text-gray-500 mt-6'>
        "Some skills can’t be found on Google. They’re passed from soul to soul." — Kalapath
      </p>
    </div>
  );
};

export default About;


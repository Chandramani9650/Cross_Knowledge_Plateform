

import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='flex flex-col items-center justify-center md:flex-row gap-10 mt-10 px-4'>
        <img
          src="https://images.pexels.com/photos/3771212/pexels-photo-3771212.jpeg"
          alt="Clay artisans"
          className='max-w-[30vw] rounded-lg shadow-md'
        />

        <div className='flex flex-col gap-4 items-start justify-end text-gray-600'>
          <p className='font-semibold text-lg'>Our OFFICE</p>
          <p className='text-sm'>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className='text-sm'>
            Tel: (415) 555‑0132 <br />
            Email: traditionalroots@artic.in
          </p>

          <p className='font-semibold text-lg'>Careers at ARTIC</p>
          <p className='text-sm'>Passionate about heritage skills? Join our mission.</p>
          <button className='border border-black px-6 py-3 hover:bg-black hover:text-white text-sm transition'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;


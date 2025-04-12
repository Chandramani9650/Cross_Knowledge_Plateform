import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import imageAssets from '../assets/assets.js' 

const Categories = () => {
  const { categories } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-zinc-900 md:mx-10 ' id='category'>
      <h1 className='text-3xl font-bold'>Explore Our Categories</h1>
      <p className='sm:w-1/3 text-center text-sm text-zinc-500'>
        Discover different cultural crafts, traditions, and arts from across India.
      </p>

      {/* Grid layout for categories */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0 w-full max-w-7xl'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='border border-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow-sm'
          >
            <img
              src={item.images[0]} // Add your image link manually
              alt='category_img'
              className='bg-neutral-100 w-full h-44 object-cover'
            />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-indigo-600 mb-2'>
                <span className='text-xl'>{item.icon}</span>
                <p className='font-semibold'>{item.title}</p>
              </div>
              <p className='text-sm text-zinc-500'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More button */}
      <button
        onClick={() => {
          navigate('/categories');
          scrollTo(0, 0);
        }}
        className='bg-indigo-600 text-white px-10 py-3 rounded-full mt-10 text-sm font-semibold hover:bg-indigo-700 transition'
      >
        View All Categories
      </button>
    </div>
  );
};

export default Categories;

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import assets from '../assets/assets.js'

const LessonsList = () => {
  const { traditionalSkillLessons } = useContext(AppContext); // Assuming the lessons are part of AppContext
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-zinc-900 md:mx-10' id='lessons'>
      <h1 className='text-3xl font-bold'>Our Skill Lessons</h1>
      <p className='sm:w-1/3 text-center text-sm text-zinc-500'>
        Explore various traditional skills from across India through detailed lessons by experts.
      </p>

      {/* Grid layout for lessons */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0 w-full max-w-7xl'>
        {traditionalSkillLessons.map((lesson, index) => (
          <div
            key={index}
            className='border border-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white shadow-sm'
            onClick={() => navigate(`/lesson/${lesson.id}`)} // Navigates to the specific lesson page
          >
            <img
              src={lesson.image} // Image for the lesson
              alt={lesson.lessonName}
              className='bg-neutral-100 w-full h-44 object-cover'
            />
            <div className='p-4'>
              <p className='text-sm text-zinc-500 mb-1 text-center'>{lesson.skill}</p>
              <p className='text-lg font-semibold mb-2 text-center'>{lesson.lessonName}</p>
              
              {/* "Learn More" Button centered horizontally */}
              <div className='flex justify-center'>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the card click event from firing
                    navigate(`/lesson/${lesson.id}`);
                  }}
                  className='bg-indigo-50 text-indigo-600 px-6 py-2 rounded-full text-sm font-semibold hover:bg-indigo-100 transition'
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsList;

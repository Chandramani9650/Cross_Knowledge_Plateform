import React from 'react';


const LessonPage = () => {
  const lesson = {
    mentor: "Lata Kumari",
    profilePic: "https://randomuser.me/api/portraits/women/56.jpg", // Hard-coded valid profile pic
    skill: "Traditional Music",
    lessonTitle: "Melodies of the Past: Traditional Music",
    img: [
     "https://www.pexels.com/photo/elderly-people-making-handmade-bamboo-crafts-6875213/"
    ],
    content: (
      <p>
        Traditional music is not just a collection of sounds; it’s a vessel that carries centuries of culture, emotion, and history. Lata Kumari, a gifted musician and expert in classical music traditions, takes you through the rich world of traditional instruments and melodies that have been passed down through generations.
        <br />
        From the soulful strains of the sitar to the rhythmic beats of the tabla, this lesson delves into the diversity of traditional music across different regions of India. You will explore the history, structure, and significance of instruments like the flute, harmonium, mridangam, and the sitar, each with its unique sound and cultural context. The lesson also introduces the concept of ragas and talas, the building blocks of Indian classical music, and their emotional and spiritual resonance.
        <br />
        Traditional music not only connects us to our roots but also serves as an expression of joy, sorrow, devotion, and reflection. Whether it’s the devotional chants of bhajans, the classical ragas of Hindustani or Carnatic music, or the folk tunes of rural communities, every piece tells a story of cultural legacy and personal expression.
        <br />
        This lesson will inspire you to appreciate the depth and complexity of traditional music, and perhaps even start learning an instrument yourself to keep these timeless melodies alive.
      </p>
    ),
  };

  const {
    mentor,
    profilePic,
    skill,
    lessonTitle,
    img,
    content,
  } = lesson;

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-zinc-800">{lessonTitle}</h1>
        <p className="mt-2 text-xl text-neutral-600">
          by <strong>{mentor}</strong> - Skill: {skill}
        </p>
        <img
          src={profilePic}
          alt={mentor}
          className="rounded-full w-36 h-36 mx-auto mt-6"
        />
      </header>
      
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-zinc-700">Lesson Content</h2>
        <div className="mt-6 mb-4">
          {img.length > 0 ? (
            <img src={img[0]} alt="lesson" className="w-1/2 rounded-lg mx-auto" />
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="text-sx text-neutral-700 leading-7 mt-6">
          {content}
        </div>
        <button className='bg-black  text-sx text-white rounded-full hover:scale(110) transiltion-all duration-300 px-6 py-3 mb-6 mt-6 mx-auto'>Ask Your Doubt</button>
      </section>

      <footer className="mt-12 text-center">
        <p className="text-sm text-gray-500">© 2025 Cultural Learning Platform</p>
      </footer>
    </div>
  );
};

export default LessonPage;

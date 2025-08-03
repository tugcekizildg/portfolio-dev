const AboutPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-16 bg-gray-900'>
      {/* Intro */}
      <div className='flex flex-col md:flex-row md:items-start md:ml-5 items-center gap-10 mb-12'>
        <img
          src='../../../public/images/profilepicture.png'
          alt='Profile Picture'
          className='w-48 h-48 rounded-full object-cover border-4 border-purple-400 shadow-md cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-purple-500/50'
        />
        <div>
          <h2 className='text-3xl font-bold text-white mb-2'>About Me</h2>
          <p className='max-w-2xl text-lg text-gray-400'>
            I am a web developer who loves to create beautiful and functional
            websites. I am currently working on a portfolio website using React
            and Tailwind CSS. I am also passionate about learning new
            technologies and staying up-to-date with the latest trends in web
            development.
          </p>
        </div>
      </div>
      {/* Bio and Skills */}
      <div className='mb-12 md:ml-5'>
        <h3 className='text-2xl font-semibold text-white mb-2'>
          Bio and Skills 👨‍💻
        </h3>
        <p className='max-w-4xl text-md text-gray-400 leading-relaxed'>
          I am a web developer who loves to create beautiful and functional
          websites. I am currently working on a portfolio website using React
          and Tailwind CSS. I am also passionate about learning new technologies
          and staying up-to-date with the latest trends in web development.
        </p>
      </div>
      {/* Tech Stack */}
      <h2 className='md:ml-5 text-2xl font-semibold text-white mb-4'>
        Tech I Use 🛠️
      </h2>
      <ul className='md:ml-5 flex flex-wrap gap-4 text-sm text-gray-300'>
        {[
          'React',
          'Tailwind CSS',
          'JavaScript',
          'HTML',
          'CSS',
          'Git',
          'GitHub',
          'Vite',
        ].map((tech) => (
          <li
            key={tech}
            className='bg-purple-600 px-4 py-2 font-semibold rounded-md cursor-pointer hover:bg-purple-700 transition-colors duration-300'>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;

import { section } from 'framer-motion/client';
import { Link } from 'react-router';
const AboutPreview = () => {
  return (
    <section className='mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900'>
      <img
        src='../../../public/images/profilepicture.png'
        alt='Profile Picture'
        className='w-32 h-32 rounded-full object-cover border-4 border-purple-400 shadow-md cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-purple-500/50'
      />
      <div>
        <h2 className='text-2xl font-bold text-white mb-2'>About Me 👋</h2>
        <p className='max-w-4xl mb-4 text-gray-400'>
          {' '}
          I am a web developer who loves to create beautiful and functional
          websites. I am currently working on a portfolio website using React
          and Tailwind CSS. I am also passionate about learning new technologies
          and staying up-to-date with the latest trends in web development.
        </p>
        <Link
          to='/about'
          className='inline-block text-white py-2 px-6 rounded bg-purple-400 hover:bg-purple-500 transition-colors duration-300'>
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;

import { Link } from 'react-router';
const Hero = ({ text = 'Check out my projects and learn more about me.' }) => {
  return (
    <header className='text-center bg-gray-900 text-white py-20 px-4 transition-colors duration-300'>
      <h2 className='text-4xl font-bold mb-4'>Welcome to Portfolio Dev 👋</h2>
      <p className='max-w-2xl mx-auto text-lg text-gray-400 mb-8'>{text}</p>
      <div className='flex justify-center gap-2'>
        <Link
          to='/projects'
          className='bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded transition-colors duration-300'>
          View Projects
        </Link>
        <Link
          to='/contact'
          className='border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-6 rounded ml-4 transition-colors duration-300'>
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Hero;

import { Link } from 'react-router';
const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center px-6 min-h-[70vh]'>
      <h1 className='text-8xl font-extrabold text-purple-400 mb-4'>404 🔍</h1>
      <h2 className='text-2xl font-semibold text-gray-200 mb-4'>
        Page Not Found
      </h2>
      <p className='text-gray-400 mb-6'>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to='/'
        className='inline-block text-white py-2 px-6 rounded bg-purple-500 hover:bg-purple-600 transition-colors duration-300'>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

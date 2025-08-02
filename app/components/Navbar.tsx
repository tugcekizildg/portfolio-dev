import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const base = 'transition duration-300 hover:text-purple-300';
  const active = 'text-purple-300 font-semibold';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];
  return (
    <nav className='bg-gray-900 border-purple-400 shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-lg font-bold text-purple-300'>
          <FaLaptopCode className='text-xl text-purple-400' />
          <span>Portfolio Dev</span>
        </NavLink>
        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6'>
          <div className='space-x-4 text-sm text-purple-100'>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => (isActive ? active : base)}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-xl font-bold text-purple-400 cursor-pointer'
            title='Menu'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className='md:hidden bg-gray-850 border-t border-purple-950 px-6 py-4 flex flex-col space-y-4 text-left'>
          {navLinks.map(({ to, label }) => (
            <NavLink
              onClick={() => setIsOpen(false)}
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? active : base)}>
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

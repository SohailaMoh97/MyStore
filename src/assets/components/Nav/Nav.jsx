import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

  return (
    <>
      <nav className='bg-gray-800 fixed right-0 left-0 top-0  text-white p-4 flex justify-center font-bold text-2xl'>
        <div className="container flex justify-between items-center p-2 ">
            <Link to={'/'}>E-Commerce</Link>
            <button
              onClick={() => setDarkMode(prev => !prev)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md"
              >
              {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
      </nav>
    </>
  )
}

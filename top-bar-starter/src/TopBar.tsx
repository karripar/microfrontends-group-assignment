import Logo from './components/Logo';


import { useState } from 'react';

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = false; // real auth state later
  const userName = 'User'; // real user name later

  return (
    <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-900 text-white shadow-md">
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#" className="hover:text-red-400 transition">Home</a>
          <a href="#" className="hover:text-red-400 transition">Upload</a>
          <a href="#" className="hover:text-red-400 transition">Profile</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        {!isLoggedIn ? (
          <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-lg transition">Login</button>
        ) : (
          <div className="relative">
            <button
              className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-700 transition"
              onClick={() => setShowMenu((v) => !v)}
            >
              <span className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-lg">👤</span>
              <span className="hidden md:inline">{userName}</span>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;

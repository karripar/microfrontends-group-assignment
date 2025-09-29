import Logo from './Logo';
import { useState } from 'react';

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = false; // real auth state later
  const userName = 'User'; // real user name later

  const [search, setSearch] = useState("");

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-4 py-2 bg-gray-900 text-white shadow-md">
      <div className="flex items-center gap-8">
        <Logo />
        <nav className="hidden md:flex gap-6 text-lg">
          <a href="host-starter/Home" className="hover:text-red-400 transition">Home</a>
          <a href="host-starter/upload" className="hover:text-red-400 transition">Upload</a>
          <a href="host-starter/profile" className="hover:text-red-400 transition">Profile</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-3 py-1 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-lg transition"
          onClick={() => {
            console.log('Searching for:', search);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default TopBar;

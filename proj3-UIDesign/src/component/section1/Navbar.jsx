import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <div className="text-2xl font-bold">Shreeji Timber Mart</div>

      <ul className="flex gap-8">
        <li>
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

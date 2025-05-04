import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  styles?: string;
}

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/discover', label: 'Discover' },
  { path: '/movie-release', label: 'Movie Release' },
  { path: '/forum', label: 'Forum' },
];

const Navbar: React.FC<NavbarProps> = ({ styles = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full  bg-white text-black ${styles}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-2xl cursor-pointer">Saint Stream</h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-green-600 font-semibold'
                  : 'hover:text-green-500 transition-colors'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex gap-3">
          <Button
            ButtonStyle="w-[100px] h-10 border border-black rounded-2xl"
            ButtonText="Sign Up"
          />
          <Button
            ButtonStyle="w-[100px] h-10 bg-green-700 text-white border border-green-700 rounded-2xl"
            ButtonText="Login"
          />
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-green-600 font-semibold'
                  : 'block hover:text-green-500'
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="mt-4 flex flex-col gap-2">
            <Button
              ButtonStyle="w-full h-10 border border-black rounded-2xl"
              ButtonText="Sign Up"
            />
            <Button
              ButtonStyle="w-full h-10 bg-green-700 text-white border border-green-700 rounded-2xl"
              ButtonText="Login"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

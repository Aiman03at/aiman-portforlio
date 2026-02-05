import { NavLink } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const baseLink =
  "px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:scale-105";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "Blog", "About", "Contact"];

  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-semibold text-zinc-900 dark:text-white">
          Aiman
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
          <DarkModeToggle />
        </div>

        {/* Mobile buttons */}
        <div className="sm:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-zinc-800 dark:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${baseLink} ${
                  isActive
                    ? "text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
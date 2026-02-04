import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const baseLink =
  "px-3 py-2 rounded-md text-sm font-medium transition";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b font-bold border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg">Aiman ✨</span>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-gray-200 font-bold dark:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-800"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            Blog
          </NavLink>

          {/*About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            About
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-gray-200 dark:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            Contact
          </NavLink>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
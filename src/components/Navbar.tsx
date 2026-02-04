import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const baseLink =
  "px-3 py-2 rounded-md text-sm font-medium transition";

export default function Navbar() {

  
  return (
    <nav className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
  <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    
    {/* Logo / Name */}
    <div className="text-xl font-semibold text-zinc-900 dark:text-white">
      Aiman
    </div>

    {/* Nav links */}
    <div className="flex gap-8">
      {["Home", "Projects", "Blog", "About", "Contact"].map((item) => (
        <a
          key={item}
          href={`/${item.toLowerCase()}`}
          className="
            text-lg font-semibold
            text-zinc-900 dark:text-zinc-100
            px-3 py-1 rounded-md
            transition-all duration-200
            hover:text-blue-600 dark:hover:text-blue-400
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            hover:-translate-y-0.5 hover:scale-105
          "
        >
          {item}
        </a>

      ))}
    </div>
    <DarkModeToggle/>
  </div>
</nav>
  );
}
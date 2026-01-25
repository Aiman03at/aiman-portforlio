import { Link } from "react-router-dom";

export default function Navbar(){

  return(
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white dark:bg-black border-b border-slate-200 dark:border-slate-800">
      <h1 className="text-xl font-bold"> Aiman ✨</h1>
      <div>
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <Link to="/blog" className="hover:text-indigo-500">Blog</Link>
        <Link to="/projects" className="hover:text-indigo-500">Projects</Link>
        
      </div>

    </nav>
  )
}
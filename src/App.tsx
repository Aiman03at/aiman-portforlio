
import{Routes,Route,useLocation} from "react-router-dom";
import {lazy,Suspense} from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
const Home =lazy(()=> import("./pages/Home"));


const Projects =lazy(()=> import("./pages/Projects"));
const  ProjectDetails =lazy (()=>import("./pages/ProjectDetails"));
const Blog =lazy(()=> import("./pages/Blog"));
const BlogDetails =lazy(()=> import("./pages/BlogDetails"));
const Contact =lazy(()=> import("./pages/Contact"));
const About =lazy(()=> import("./pages/About"));  


function App() {
  const location = useLocation();

  return (
    
  
    
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      

      
        <Navbar/>
        
        <Suspense fallback={<div className="text-center pt-20">Loading...</div>}>
        <AnimatePresence mode="wait">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        </AnimatePresence>
        </Suspense>
        
      </div>
    
  )
}

export default App
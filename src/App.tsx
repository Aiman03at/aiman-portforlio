
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  

  return (
    
  
    <BrowserRouter>
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      

      
        <Navbar/>
        <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
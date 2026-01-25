
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
      <header className="p-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">Aiman ✨</h1>
        <DarkModeToggle />
      </header>

      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
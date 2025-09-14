
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Experience from "./Components/Experience.jsx";
import About from "./Components/About.jsx";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("light"); 

  // listen the change of theme, update <html> class accordingly
  useEffect(() => {
    const root = document.documentElement;  //<html>
    if (theme === "dark") 
      // <html class="dark">
      root.classList.add("dark"); //classlist is a API to manipulate class
    else root.classList.remove("dark");
  }, [theme]);

//   const setDark = function(nextBool) {
//   return setTheme(nextBool ? "dark" : "light");
// };

  const setDark = (nextBool) => setTheme(nextBool ? "dark" : "light");

  return (
    <BrowserRouter>
    
    {/* dark is the same with upon dark in useEffect */}
      <main className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10
                       bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors">
         {/* dark is a boollen */}
        <Navbar dark={theme === "dark"} setDark={setDark} />
        
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/about" element={<About />} /> 
        </Routes>

      </main>
      
    </BrowserRouter>
  );
}

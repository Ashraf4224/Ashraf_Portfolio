import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Skills from "./pages/skills/Skills";
function App() {
  return (
    <div className="w-full h-full bg-[#585b5f] text-neutral-300">
      <div className="px-6">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Skills />
      </div>
    </div>
  );
}

export default App;

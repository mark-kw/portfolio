
import Navbar from "./components/Navbar";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <hr className="border-t border-gray-800 my-5" />
      <Projects />
      <hr className="border-t border-gray-800 my-5" />
      <Skills />
      <hr className="border-t border-gray-800 my-5" />
      <Contact />
    </main>
  );
}


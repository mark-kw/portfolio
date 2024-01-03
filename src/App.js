
import Navbar from "./components/Navbar";
import React, { useRef } from "react";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css'
import AboutMe from "./components/AboutMe";


export default function App() {

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      window.scrollTo({
        top: projectsRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="text-white bg-gray-900 body-font">
      <Navbar />
      <Accueil scrollToProjects={scrollToProjects} />
      <AboutMe />
      <hr />
      <Projects ref={projectsRef} />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </main>
  );
}


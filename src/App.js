
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import React, { useRef } from "react";
import Accueil from "./components/Accueil";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './App.css'
import AboutMe from "./components/AboutMe";


export default function App() {

  const aboutMeRef = useRef(null);

  const scrollToProjects = () => {
    if (aboutMeRef.current) {
      window.scrollTo({
        top: aboutMeRef.current.offsetTop - 150,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="text-white bg-gray-900 body-font">
      <Navbar />
      <Accueil scrollToProjects={scrollToProjects} />
      <AboutMe ref={aboutMeRef} />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Contact />
    </main>
  );
}


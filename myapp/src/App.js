import React, { useState, useEffect, useRef } from 'react';
import { BsGithub, BsDisplay, BsDisplayFill,BsLinkedin} from 'react-icons/bs'

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  const [slideH1, setSlideH1] = useState({ transform: "translateX(0)" })
  const [slideH3, setSlideH3] = useState({ transform: "translateX(0)" })
  const [showProject, setShowProject] = useState("none")
  let pageHeight = window.innerHeight
  const HomeRef = useRef();
  const AboutRef = useRef();
  const ProjectsRef = useRef();

  window.addEventListener('scroll', function (event) {
    let currentPage = window.pageYOffset
    setSlideH1({transform: `translateX(${currentPage}%)`})
    setSlideH3({ transform: `translateX(${-currentPage}%)` })
    if (currentPage < pageHeight / 2) {
      // console.log("page one")
      setShowProject('none')
    }
    else if ((currentPage > pageHeight / 2) && (currentPage < pageHeight * 1.3)) {
      // console.log("page two")
      setShowProject('none')
    } else {
      setShowProject('')
      // console.log("page three")
    }
  })
  useEffect(() => {
    clickHome()
  }, [])

  function clickHome() {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickAbout() {
    AboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function clickProjects() {
    ProjectsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <Navbar
        clickHome={clickHome}
        clickAbout={clickAbout}
        clickProjects={clickProjects}
      />
      <div className='content-container'>
        <div ref={HomeRef}>
          <Home slideH1={slideH1} slideH3={slideH3} />
        </div>
        <div ref={AboutRef}>

        <About />
        </div>
        <div ref={ProjectsRef}>

          <Projects show={showProject } />
        </div>
      </div>
      <nav className='side-nav'>
      <a
                    href={"https://github.com/durlinlin"}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <BsGithub style={{ color: "white" }} /> 
        </a>
        <a
                    href={"https://www.linkedin.com/in/linlinlam/"}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <BsLinkedin style={{ color: "white" }} /> 
                  </a>
      </nav>
    </div>
  );
}

export default App;

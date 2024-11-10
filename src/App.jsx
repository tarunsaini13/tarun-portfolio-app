import './App.css'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Project from './components/Project'
import { useEffect, useRef } from 'react'


function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <>
      <Navbar
        homeRef={homeRef} 
        skillRef={skillRef} 
        projectRef={projectRef}
      />
      <div id='main-container'>
        <div className='section-wrapper' ref={homeRef}>
          <Info/>
        </div>
        <div className='section-wrapper' ref={skillRef}>
          <Skill/>
        </div>
        <div className='section-wrapper' ref={projectRef}>
          <Project/>
        </div>
     </div>
    </>
  )
}

export default App

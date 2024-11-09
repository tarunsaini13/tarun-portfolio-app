import './App.css'
import Info from './components/Info'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Project from './components/Project'
import { useRef } from 'react'
function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  
  return (
    <>
      <Navbar scrollToHome={() => homeRef.current.scrollIntoView({ behavior: 'auto', block: "start"})}
        scrollToSkill={() => skillRef.current.scrollIntoView({ behavior: 'auto',block:"start"})}
        scrollToProject={() => projectRef.current.scrollIntoView({ behavior: 'auto',block:"start" })}
      />
      <div className="main-container">
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

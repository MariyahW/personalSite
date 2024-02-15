import { useState } from 'react'
import About from './compo/About';
import Nav from './compo/Nav';
import Skills from './compo/Skills';
import Education from './compo/Education';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Nav />
    <About />
    <Skills />
    <Education />
     </>
  )
}

export default App

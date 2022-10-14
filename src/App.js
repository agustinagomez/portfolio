import React from 'react'
import Skills from './components/Skills/Skills'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import './App.css'
import 'tw-elements'

function App() {
  return (
    <div>
      <Nav/>
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  )
}

export default App

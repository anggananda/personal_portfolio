import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Project from './components/Project'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Hobby from './components/Hobby'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Hobby/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
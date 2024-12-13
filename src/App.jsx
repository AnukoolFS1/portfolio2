import { useState } from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Project';
import Skills from './component/Skills';
import Footer from './component/Footer'
function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App

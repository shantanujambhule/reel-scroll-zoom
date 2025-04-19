import React from 'react'
// import bgImg from "./assets/bg.jpg"
import Preloader from './components/preloader'
import Nav from './components/Nav'
import { useLenis } from './components/useLenis'
import Hero from './components/Hero'
import Work from './components/Work'
import Motion from './components/Motion'
import News from './components/News'
import Footer from './components/footer'





const App = () => {
  useLenis();
  return (
    <div>
     
      <Nav/>
      <Hero/>
      <Work/>
      <Motion/>
      <News/>
      <Footer/>
      <Preloader/>
      
      
    </div>
    
  )
}

export default App

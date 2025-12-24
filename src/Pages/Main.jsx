import React from 'react'
import './Main.css'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'


function Main() {
  return (
    <div className="grid-bg relative h-full w-screen text-white">
      <div className="flex flex-col h-full relative z-50 items-center justify-center">
        <Header/>
        <Hero/>
        
        <Footer/>
      </div>
    </div>
  )
}

export default Main;


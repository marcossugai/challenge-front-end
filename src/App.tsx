import { useState } from 'react'
import './App.css'
import Consoles from './components/Consoles/Consoles'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import StarWars from './components/StarWars/StarWars'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <StarWars />
      <Consoles />
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Consoles from './components/Consoles/Consoles'
import Diversos from './components/Diversos/Diversos'
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
      <Diversos />
    </div>
  )
}

export default App

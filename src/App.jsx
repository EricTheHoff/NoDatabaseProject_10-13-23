import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import Favorites from './components/Favorites'

function App() {

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <h2>Please use the search bar to find some Pokemon!</h2>
        <SearchBar/>
      </div>
      <Results/>
      <Favorites/>
    </>
  )
}

export default App

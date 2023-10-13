import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App({favoriteArray}) {

  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <h2>Please use the search bar to find some Pokemon!</h2>
        <SearchBar
        favoriteArray={favoriteArray}
        />
      </div>
    </>
  )
}

export default App

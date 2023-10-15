import './App.css'
import SearchBar from './components/SearchBar'

function App({favoriteArray}) {
  // Returning our welcome message along with the SearchBar component, passing our favorite array as a property.
  // Referencing an image saved in /docs as part of the welcome message.
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <h2>Please use the search bar to find some
          <img
            src="../docs/pokemonlogo.png"
            alt="Pokemon!"
            width="8%"
            height="auto"
          />
        </h2>
        <SearchBar
          favoriteArray={favoriteArray}
        />
      </div>
    </>
  )
}

export default App

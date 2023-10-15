import { useState } from "react"
import axios from "axios"
import Results from "./Results"
import Favorites from "./Favorites"


const SearchBar = ({favoriteArray}) => {
    const [search, setSearch] = useState("search here...") // Search bar contents.
    const [foundObj, setFoundObj] = useState({}) // Object from the search result.
    const [favItem, setFavItem] = useState(favoriteArray) // Favorite Pokemon array.

    // This function makes a DELETE request using the ID parameter of the item that was deleted.
    // After it's deleted, a GET request gets our Favorite Pokemon array and sets it to our state variable.
    const deleteFunc = async (pokemonId) => {
        const response = await axios.delete(`/deletePokemon/${pokemonId}`)
    
        if (!response.data.error) {
          const favoriteResponse = await axios.get('/favoritePokemon')
          setFavItem(favoriteResponse.data)
        }
      }

  return (
    <>
    {/* On form submission, prevent the page from reloading and create a new object with data received from the GET request to
    PokeAPI. Update our state variable to match that object. Includes error handling if the search is invalid. */}
    <form onSubmit={(e) => {
        e.preventDefault()

        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
          .then((response) => {
            const resultObj = {
                id: response.data.id,
                name: response.data.name,
                img: response.data.sprites.front_default,
            }
            setFoundObj(resultObj)
          })
          .catch((error) => alert(`Sorry, we couldn't find any Pokemon called ${search}. Please try again!`))
        }
  }
    >
      {/* Search field with value set to our state search variable. Using onChange to update the value of our state variable to
      whatever is typed. PokeAPI expects the query to be lower case, so it converts the string to lower case. This state variable will
      be used for the call to PokeAPI. */}
      <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button type="submit">Search</button>
    </form>

  <div>
    <div id="results-table">
      <Results
        searchResult={foundObj} // The object from the search result.
        setFavItem={setFavItem} // The setter function for the Favorite Pokemon array.
        favItem={favItem} // The Favorite Pokemon array.
      />
    </div>
    <div id="favorites-table">
      <Favorites
        favItem={favItem} // The Favorite Pokemon array.
        deleteEntry={deleteFunc} // The function to delete an item from the Favorite Pokemon array.
      />
    </div>
  </div>
    </>
  )}

export default SearchBar
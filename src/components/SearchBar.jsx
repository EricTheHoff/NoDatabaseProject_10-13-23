import { useState } from "react"
import axios from "axios"
import Results from "./Results"
import Favorites from "./Favorites"

const SearchBar = ({favoriteArray}) => {
    const [search, setSearch] = useState("search here...")
    const [foundObj, setFoundObj] = useState({})
    const [favItem, setFavItem] = useState(favoriteArray)
    console.log(`FavArray is currently: ${favoriteArray}`)

    const deleteFunc = async (pokemonId) => {
        const response = await axios.delete(`/deletePokemon/${pokemonId}`)
        console.log(response.data)
    
        if (!response.data.error) {
          const updatedPokemon = favItem.filter((pokemon) => pokemon.id !== pokemonId)
          setFavItem(updatedPokemon)
        }
      }

  return (
    <>
    <form onSubmit={async (e) => {
        e.preventDefault()

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const resultObj = {
            id: res.data.id,
            name: res.data.name,
            img: res.data.sprites.front_default,
        }
        setFoundObj(resultObj)
    }}
    >
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button type="submit">Search</button>
    </form>
    <Results
    searchResult={foundObj}
    setFavItem={setFavItem}
    favItem={favItem}
    />
    <Favorites
    newFavorite={favItem}
    favoriteArray={favoriteArray}
    deleteEntry={deleteFunc}
    />
    </>
  )}

export default SearchBar
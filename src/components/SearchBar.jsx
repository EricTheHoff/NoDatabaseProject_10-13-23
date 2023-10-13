import { useState } from "react"
import axios from "axios"

const SearchBar = () => {
    const [search, setSearch] = useState("Search here...")

  return (
    <form onSubmit={async (e) => {
        e.preventDefault()

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        const resultObj = {
            name: res.data.name,
            img: res.data.sprites.front_default
        }
        return resultObj
    }}
    >
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
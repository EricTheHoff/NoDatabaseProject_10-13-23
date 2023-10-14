import FavButtons from "./FavButtons"
import Notes from "./Notes"
import FavoritesHeader from "./FavoritesHeader"
import SpriteFavorite from "./SpriteFavorite"
import NameFavorite from "./NameFavorite"
import { useState } from "react"
import FavoritesRow from "./FavoritesRow"
import axios from "axios"


const Favorites = ({newFavorite, deleteEntry}) => {
  // const [currentFavorites, setCurrentFavorites] = useState(favoriteArray)

  const favRows = newFavorite.map((favEntry) => {
    const {id, name, img, isEditing} = favEntry

    return (
      <FavoritesRow
        key={id}
        id={id}
        objectData={{name, img}}
        newFavorite={newFavorite}
        isEditing={isEditing}
        deleteEntry={deleteEntry}
      />
    )
  })

  const deleteFunc = async (pokemonId) => {
    const response = await axios.delete(`/deletePokemon/${pokemonId}`)
    console.log(response.data)

    if (!response.data.error) {
      const updatedPokemon = currentFavorites.filter((pokemon) => pokemon.id !== pokemonId)
      setCurrentFavorites(updatedPokemon)
    }
  }

  return (
    <table>
        <thead>
            <FavoritesHeader/>
        </thead>
        <tbody>
          {favRows}
        </tbody>
    </table>
  )
}

export default Favorites
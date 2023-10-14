import FavButtons from "./FavButtons"
import Notes from "./Notes"
import SpriteFavorite from "./SpriteFavorite"
import NameFavorite from "./NameFavorite"
import { useState } from "react"
import axios from "axios"


const FavoritesRow = ({id, objectData, newFavorite, isEditing, deleteEntry}) => {
    const [editMode, setEditMode] = useState(isEditing)
    const [notes, setNotes] = useState("")
    

    const {name, img} = objectData

    const changeMode = async () => {
        const bodyObj = {
            id: id,
            name: name,
            image: img,
        }
        const response = await axios.put(`/editNotes/${id}`, bodyObj)
        console.log(response.data)
        setEditMode(!editMode)
    }

  return (
    <tr>
        <FavButtons
        isEditing={editMode}
        changeMode={changeMode}
        deleteMode={deleteEntry}
        />
        <SpriteFavorite
        image={img}
        />
        <NameFavorite
        pokemon={name}
        />
        <Notes
        isEditing={editMode}
        notes={notes}
        onValueChange={setNotes}
        />
    </tr>
  )
}

export default FavoritesRow
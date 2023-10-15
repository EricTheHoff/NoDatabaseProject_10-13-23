import FavButtons from "./FavButtons"
import Notes from "./Notes"
import SpriteFavorite from "./SpriteFavorite"
import NameFavorite from "./NameFavorite"
import { useState } from "react"
import axios from "axios"


const FavoritesRow = ({id, objectData, isEditing, deleteEntry}) => {
  const {name, img, notes} = objectData
  const [editMode, setEditMode] = useState(isEditing) // Represents a boolean value for editing.
  const [currentNotes, setCurrentNotes] = useState(notes) // The notes field.


    // This function interacts with our isEditing field. It makes a PUT request using the ID of the entry that was clicked as the parameter.
    // It passes a body object to our server which includes a new key called 'notes' that's equal to our state variable.
    // After the response, use a setter function to change the boolean value for editing.
    const changeMode = async () => {
        const bodyObj = {
            id: id,
            name: name,
            image: img,
            notes: currentNotes
        }
        const response = await axios.put(`/editNotes/${id}`, bodyObj)
        console.log(response.data)
        setEditMode(!editMode)
    }

  return (
    <tr>
        <FavButtons
          isEditing={editMode} // Boolean for editing.
          changeMode={changeMode} // Setter function to toggle boolean.
          deleteMode={deleteEntry} // The delete function to remove an item from the Favorite Pokemon array.
          id={id} // ID for the specific entry so it knows what parameter to pass our delete function.
        />
        <SpriteFavorite
          image={img} // Image of the favorite.
        />
        <NameFavorite
          pokemon={name} // Name of the favorite.
        />
        <Notes
          isEditing={editMode} // Boolean for editing.
          notes={currentNotes} // Value of the note field.
          onValueChange={setCurrentNotes} // Setter function to change the value of the note field.
        />
    </tr>
  )
}

export default FavoritesRow
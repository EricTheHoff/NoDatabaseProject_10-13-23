

const FavButtons = ({isEditing, changeMode, deleteMode, id}) => {
  // Returns a ternary that checks if isEditing exists. If it does, display a single Save button with the changeMode function.
  // The changeMode function makes a PUT request that will update the contents of the 'notes' field.
  // If isEditing does not exist, then display the Edit and Delete buttons. The Edit button will trigger the changeMode function again,
  // and the Delete button makes a DELETE request passing in the ID as a parameter.
  return isEditing ? (
    <td>
        <button onClick={changeMode}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={changeMode}>Edit</button>
      <button onClick={() => deleteMode(id)}>Delete</button>
    </td>
  )
}

export default FavButtons
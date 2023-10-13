

const FavButtons = ({isEditing, changeMode, deleteMode}) => {
  return isEditing ? (
    <td>
        <button onClick={changeMode}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={changeMode}>Edit</button>
      <button onClick={deleteMode}>Delete</button>
    </td>
  )
}

export default FavButtons
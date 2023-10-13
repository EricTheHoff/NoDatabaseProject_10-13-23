

const Notes = ({isEditing, notes, onValueChange}) => {
  return isEditing ? (
    <td>
        <input
        type="text"
        value={notes}
        onChange={(e) => onValueChange(e.target.value)}
        />
    </td>
  ) : (
    <td>
      {notes}
    </td>
  )
}

export default Notes
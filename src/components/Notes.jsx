

const Notes = ({isEditing, notes, onValueChange}) => {
  // Returns a ternary to check if isEditing exists. If it does, display an input field with an onChange using the setter function
  // to update the notes field. If isEditing doesn't exist, just display the current value of 'notes.'
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
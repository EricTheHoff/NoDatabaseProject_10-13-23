import FavoritesHeader from "./FavoritesHeader"
import FavoritesRow from "./FavoritesRow"


const Favorites = ({favItem, deleteEntry}) => {

  // Mapping through the Favorite Pokemon array. Destructuring like normal, also adding a key called isEditing.
  const favRows = favItem.map((favEntry) => {
    const {id, name, img, notes, isEditing,} = favEntry

    return (
      <FavoritesRow
        key={id}
        id={id}
        objectData={{name, img, notes}}
        isEditing={isEditing} // isEditing value. Doesn't actually equal anything. Will use this for our edit buttons.
        deleteEntry={deleteEntry} // The function to delete an item from the Favorite Pokemon array.
      />
    )
  })

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
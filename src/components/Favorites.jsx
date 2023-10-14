import FavoritesHeader from "./FavoritesHeader"
import FavoritesRow from "./FavoritesRow"


const Favorites = ({newFavorite, deleteEntry}) => {

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
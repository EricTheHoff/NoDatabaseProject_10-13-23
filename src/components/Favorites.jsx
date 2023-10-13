import FavButtons from "./FavButtons"
import Notes from "./Notes"
import ResultName from "./ResultName"
import SpriteCell from "./SpriteCell"
import FavoritesHeader from "./FavoritesHeader"


const Favorites = () => {
  return (
    <table>
        <thead>
            <FavoritesHeader/>
        </thead>
        <tr>
            <FavButtons/>
            <SpriteCell/>
            <ResultName/>
            <Notes/>
        </tr>
        <tfoot><br></br></tfoot>
    </table>
  )
}

export default Favorites
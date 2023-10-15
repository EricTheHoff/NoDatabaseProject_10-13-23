import AddToFavorites from "./AddToFavorites"
import SpriteCell from "./SpriteCell"
import ResultName from "./ResultName"
import axios from "axios"


const ResultsRow = ({id, objectData, setFavItem, favItem}) => {
    const {name, img} = objectData

    // This function makes a POST request passing in 4 fields as an object. The response is then sent to a copy of the
    // Favorite Pokemon array using the setter function.
    const addToFav = async () => {
        const response = await axios.post("/addToFav", {id: id, name: name, img: img, notes: ""})
        setFavItem([...favItem, response.data])
    }

    return (
    <tr>
        <AddToFavorites
        favButton={addToFav} // Add to Favorites button functionality.
        />
        <SpriteCell
        image={img} // Image from the search result.
        />
        <ResultName
        pokemon={name} // Name from the search result.
        />
    </tr>
  )
}

export default ResultsRow
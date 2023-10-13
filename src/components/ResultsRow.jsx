import AddToFavorites from "./AddToFavorites"
import SpriteCell from "./SpriteCell"
import ResultName from "./ResultName"
import { useState } from "react"
import axios from "axios"

const ResultsRow = ({id, objectData, setFavItem, favItem}) => {
    
    const {name, img} = objectData

    const addToFav = async () => {
        const response = await axios.post("/addToFav", {id: id, name: name, img: img})
        console.log(response.data)
        setFavItem([...favItem, response.data])
    }

    return (
    <tr>
        <AddToFavorites
        favButton={addToFav}
        />
        <SpriteCell
        image={img}
        />
        <ResultName
        pokemon={name}
        />
    </tr>
  )
}

export default ResultsRow
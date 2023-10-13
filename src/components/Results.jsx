import SpriteCell from "./SpriteCell"
import ResultName from "./ResultName"
import AddToFavorites from "./AddToFavorites"
import ResultsHeader from "./ResultsHeader"
import ResultsRow from "./ResultsRow"
import { useState } from "react"
import axios from "axios"


const Results = ({searchResult, setFavItem, favItem}) => {
  const {id, name, img} = searchResult

  return (
    <table>
      <thead>
          <ResultsHeader/>
      </thead>
      <tbody>
        <ResultsRow
        key={id}
        id={id}
        objectData={{name, img}}
        setFavItem={setFavItem}
        favItem={favItem}
        />
      </tbody>
    </table>
  )
}

export default Results
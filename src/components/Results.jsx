import SpriteCell from "./SpriteCell"
import ResultName from "./ResultName"
import AddToFavorites from "./AddToFavorites"
import ResultsHeader from "./ResultsHeader"


const Results = () => {
  return (
    <table>
        <thead>
            <ResultsHeader/>
        </thead>
    <tr>
        <AddToFavorites/>
        <SpriteCell/>
        <ResultName/>
    </tr>
    <tfoot></tfoot>
    </table>
  )
}

export default Results
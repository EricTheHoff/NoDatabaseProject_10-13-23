import ResultsHeader from "./ResultsHeader"
import ResultsRow from "./ResultsRow"


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
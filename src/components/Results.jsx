import ResultsHeader from "./ResultsHeader"
import ResultsRow from "./ResultsRow"


const Results = ({searchResult, setFavItem, favItem}) => {
  // Destructures the object from the search result. These will be passed as properties to the ResultsRow.
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
          setFavItem={setFavItem} // Setter function to update Favorite Pokemon array.
          favItem={favItem} // Favorite Pokemon array.
        />
      </tbody>
    </table>
  )
}

export default Results
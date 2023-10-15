import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

// Initial GET request retrieves our Favorite Pokemon array from the server controller. Currently, the array is empty.
axios.get('/favoritePokemon')
  .then((response) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App 
          // Passing the data from the GET response (which is the empty array) as a property.
          favoriteArray={response.data}
        />
      </React.StrictMode>,
    )
  })
  .catch((error) => {
    // Error handling in case of a problem on the initial GET request.
    console.log(error)
  })

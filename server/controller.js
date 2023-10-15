// Storing Favorite Pokemon array on the server so it maintains on front-end refresh.
let favorites = []

const handlerFunctions = {
    // addToFav is a POST which takes 4 fields from the request body. It saves those fields to a new object and pushes that object
    // to the Favorite Pokemon array.
    addToFav: (req, res) => {
        const {id, name, img, notes} = req.body
        const newFav = {
            id: id,
            name: name,
            img: img,
            notes: notes
        }
        favorites.push(newFav)
        res.send(newFav)
    },

    // editNotes is a PUT which takes the ID from the request and 3 fields from the body. It uses the ID to find the specific element
    // in the Favorite Pokemon array and sets the value of the 3 fields to match the data received in the PUT request for that element.
    editNotes: (req, res) => {
        const {id} = req.params
        const {name, image, notes} = req.body
        const index = favorites.findIndex((pokemon) => pokemon.id == id)
        const pokemonIndex = favorites[index]

        pokemonIndex.name = name
        pokemonIndex.image = image
        pokemonIndex.notes = notes
        
        res.send(pokemonIndex)
    },

    // getFavorites is a GET which simply gets the Favorite Pokemon array.
    getFavorites: (req, res) => res.send(favorites),
    
    // deletePokemon is a DELETE which takes the ID from the request parameter. It then filters the Favorite Pokemon array and return
    // any elements whose ID does NOT match the parameter ID. 
    deletePokemon: (req, res) => {
        const {id} = req.params

        favorites = favorites.filter((pokemon) => {
            return pokemon.id !== +id})
        
        console.log(favorites)
        res.send(`Pokemon has been deleted`)

    }
}

export default handlerFunctions
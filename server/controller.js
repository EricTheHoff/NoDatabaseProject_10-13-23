let favorites = []

const handlerFunctions = {
    addToFav: (req, res) => {
        const {id, name, img} = req.body
        const newFav = {
            id: id,
            name: name,
            img: img
        }
        favorites.push(newFav)
        res.send(newFav)
    },
    editNotes: (req, res) => {
        const {id} = req.params
        const {name, img} = req.body
        const index = favorites.findIndex((pokemon) => pokemon.id == id)
        const pokemonIndex = favorites[index]

        pokemonIndex.name = name
        pokemonIndex.img = img
        
        res.send(pokemonIndex)
    },
    getFavorites: (req, res) => res.send(favorites),
    deletePokemon: (req, res) => {
        const {id} = req.params

        favorites = favorites.filter((pokemon) => pokemon.id !== +id)
        res.send(favorites)
    }
}

export default handlerFunctions
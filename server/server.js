import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";

const app = express()

app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(express.json())

import handlerFunctions from "./controller.js"

app.post("/addToFav", handlerFunctions.addToFav)
app.put('/editNotes/:id', handlerFunctions.editNotes)
app.get('/favoritePokemon', handlerFunctions.getFavorites)
app.delete('/deletePokemon/:id', handlerFunctions.deletePokemon)

ViteExpress.listen(app, 8000, () => console.log(`App has been initialized to http://localhost:8000`))
//Imports
const express = require("express");
const cors = require("cors")
const { MongoClient } = require("mongodb")

//Init
const app = express()

//Config
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Database
const uri = "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
const database = client.db("news")

//Start
app.listen(4000, () => {
    console.log("Il server è avviato su porta 4000")
})

//Endpoint
app.get("/ApiTest", async (req, res) => {

    const collection = database.collection("data")

    const result = await collection.find({}).toArray()

    if (result[0].length !== 0) {
        res.json(result[0])
    } else {
        res.status(404).json("Errore")
    }
})
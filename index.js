const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const faraonroutes = require('./routes/Faraon.routes')
const PORT = 3000
const cors = require('cors');


const app = express()

app.use(cors())
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/faraones', faraonroutes())


mongoose.connect("mongodb+srv://herwing43:Nueve123@backenddb.s7yan.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to database!");
        
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
const express = require("express")
const mongoose = require('mongoose')
const myRouter = require('./router')

const app = express()

app.use(express.json())
mongoose.connect('kunware meron/url dapat ng db nakalagay')
    .then(() =>{
        app.listen(3000, () =>{
            console.log('Listening to port 3000')
        })
    })
    .catch(error =>{
        console.log(error)
    })



app.use(myRouter)
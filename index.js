const express = require('express')
const mongoose = require('mongoose')
const taskRouter = require('./server/routes/task.api')

require('dotenv').config()
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname , "dist")))
app.use(express.json())
app.use('/task', taskRouter)

const PORT = 3001

mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log("connected to database"))

app.listen(PORT , function(){
   console.log("up and running on port " + PORT); 
})




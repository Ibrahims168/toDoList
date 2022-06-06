const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    taskName: String,
    taskContent: String,
    taskNum: Number
})

const Task = mongoose.model("task", taskSchema)

module.exports = Task
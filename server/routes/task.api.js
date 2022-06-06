const express = require('express')
const mongoose = require('mongoose')
const Task = require('../models/task.model')

const router = express.Router()

router.get('/getTasks', async function(req , res){
    const tasks = await Task.find({})
    res.send(tasks)
})

router.post('/addNewTask', async function (req , res) {
    const task = new Task(req.body)
    const response = await task.save()
    res.send(response)
})

module.exports = router
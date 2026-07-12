const Todo = require('../models/todoModel')

const createTodo = async (req, res) => {
    const { task, priority } = req.body
    const todo = new Todo({ task: task, priority: priority })
    res.send(todo)
    console.log(todo)
}

module.exports = { createTodo }
const Todo = require('../models/todoModel')

const createTodo = async (req, res) => {
    const { task, priority } = req.body
    const fileType = req.file.mimetype.split('/')[0]
    const fileUrl = req.file.path
    const todo = new Todo({ task: task, priority: priority, path: {type: fileType, url: fileUrl} })
    res.send(todo)
    await todo.save()
}

module.exports = { createTodo }
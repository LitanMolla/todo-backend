const Todo = require('../models/todoModel')

const createTodo = async (req, res) => {
    const { task, priority } = req.body
    try {
        const fileType = req?.file?.mimetype.split('/')[0]
        const fileUrl = req?.file?.path
        if (!task || !priority) {
            return res.status(400).json({ success: false, message: 'All feild are required' })
        }
        const todo = new Todo({ task: task, priority: priority, path: { type: fileType, url: fileUrl } })
        await todo.save()
        res.status(201).json({ success: true, message: "Todo created successfully", data: todo })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json({ success: true, message: "Todo get succssfully", data: todos })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}
const deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        await Todo.findByIdAndDelete({ _id: id })
        res.send({ success: true, message: "Todo Deleted" })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}
const updateTodo = async (req, res) => {
    const { id } = req.params
    const { task, priority } = req.body
    const fileType = req?.file?.mimetype.split('/')[0]
    const fileUrl = req?.file?.path
    if (!task || !priority) {
        return res.status(400).json({ success: false, message: 'All feild are required' })
    }
    try {
        const data = await Todo.findByIdAndUpdate({ _id: id }, { task: task, priority: priority, path: { type: fileType, url: fileUrl } })
        res.status(200).json({ success: true, message: "Todo updated successfully" })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }
}
module.exports = { createTodo, getTodos, deleteTodo, updateTodo }
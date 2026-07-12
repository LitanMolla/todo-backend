const Todo = require('../models/todoModel')

const createTodo = async (req, res) => {
    const { task, priority } = req.body
    const fileType = req?.file?.mimetype.split('/')[0]
    const fileUrl = req?.file?.path
    if (!task||!priority) {
        return res.send({success: false, message: 'All feild are required'})
    }
    const todo = new Todo({ task: task, priority: priority, path: {type: fileType, url: fileUrl} })
    res.send({success: true, message: "Todo created successfully", data: todo})
    await todo.save()
}
const getTodos = async (req,res)=>{
    const todos = await Todo.find({})
    res.send({success: true, message: "Todo get succssfully", data: todos})
}
const deleteTodo = async (req,res)=>{
    const {id} = req.params
    await Todo.findByIdAndDelete({_id:id})
    console.log(id)
    res.send({success:true,message: "Todo Deleted"})
}

module.exports = { createTodo , getTodos, deleteTodo}
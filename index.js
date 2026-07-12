const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { createTodo } = require('./controllers/todoController')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://todoapp:todoapp@cluster0.eluznep.mongodb.net/todoapp?appName=Cluster0').then(() => { console.log(`Database connected successfully`) })

app.get('/',(req,res)=>{res.send('Hello world')})
app.post('/todo/create',createTodo)
app.listen(5000,()=>{console.log('Server is running')})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const { createTodo, getTodos, deleteTodo } = require('./controllers/todoController')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/upload',express.static('upload'))
mongoose.connect('mongodb+srv://todoapp:todoapp@cluster0.eluznep.mongodb.net/todoapp?appName=Cluster0').then(() => { console.log(`Database connected successfully`) })
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./upload')
    },
    filename: (req,file,cb)=>{
        const uniqueName = Date.now() + '-' + file.originalname
        cb(null,uniqueName)
    }
})
const upload = multer({storage:storage})

app.get('/',(req,res)=>{res.send('Hello world')})
app.post('/todo/create',upload.single('image'),createTodo)
app.get('/todo',getTodos)
app.delete('/todo/delete/:id',deleteTodo)
app.listen(5000,()=>{console.log('Server is running')})
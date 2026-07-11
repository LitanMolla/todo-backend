const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://todoapp:todoapp@cluster0.eluznep.mongodb.net/todoapp?appName=Cluster0').then(() => { console.log(`Database connected successfully`) })

app.listen(5000,()=>{console.log('Server is running')})
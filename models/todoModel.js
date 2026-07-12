const mongoose = require('mongoose')
const {Schema} = mongoose

const todoSchema = new Schema({
    task: {
        type: String,
        requird: true
    },
    priority: {
        type: String,
        requird: true,
        enum: ['high','medium','low']
    },
    status: {
        type: String,
        requird: true,
        enum: ['pending','complete','block'],
        default: 'pending'
    },
    path: {
        type:{
            type: String
        },
        url: {
            type: String
        }
    }
})

module.exports=mongoose.model('Todo',todoSchema)
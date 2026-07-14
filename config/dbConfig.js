const mongoose = require('mongoose')
const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://todoapp:todoapp@cluster0.eluznep.mongodb.net/todoapp?appName=Cluster0')
        console.log('Database connected successfully')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = dbConnect
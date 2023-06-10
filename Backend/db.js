const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb:localhost:27017/my_portfolio") 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectDB
const mongoose = require('mongoose')


const projectScheama =new mongoose.Schema({
    project_no : {
        type:Number,
        required:true
    },
    title : {
        type:String,
        required:true
    },
    content : {
        type:String,
        required:true
    },
    points:[{
        type: String
    }]


})

module.exports=  mongoose.model('Project',projectScheama)
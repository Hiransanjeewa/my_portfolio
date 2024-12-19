const mongoose = require('mongoose')


const emailScheama =new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required: true
    },
    message : {
        type : String,
        required : true
    },
    date : {
        type:Number,
        required:true
    }

})

module.exports=  mongoose.model('Email',emailScheama)
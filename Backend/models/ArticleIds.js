const mongoose = require('mongoose')


const articleIdScheama =new mongoose.Schema({
    article_id : {
        type : String,
        required : true
    },
})

module.exports=  mongoose.model('Email',emailScheama)
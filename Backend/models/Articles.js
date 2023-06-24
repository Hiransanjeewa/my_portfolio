const mongoose = require('mongoose')


const articleScheama =new mongoose.Schema({
    article_id : {
        type : String,
        required : true
    },
    last_modified_at : {
        type : String,
        required: true
    },
    url : {
        type : String,
        required : true
    },
    image_url : {
        type:String,
        required:true
    },
    title : {
        type:String,
        required:true
    },
    subtitle : {
        type:String,
        required:true
    },
    category : {
        type:String,
        required:false
    }


})

module.exports=  mongoose.model('Article',articleScheama)
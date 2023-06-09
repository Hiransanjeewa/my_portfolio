const express = require('express')
const abc = express();

function logOriginalUrl (req, res, next) {
 //   console.log('Request URL:', req.originalUrl)
    console.log('Request URL:', "asdasd")
  //  next()
}


module.exports = logOriginalUrl
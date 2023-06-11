const express = require('express')
const router = express.Router()


const services = require('../services/blogServicesImpl')
const Db=require('../database/db')
const Email = require("../models/Emails");
// Email services
const EmailService = require('../services/emailService')




// middleware that is specific to this router
router.use((req, res, next) => {
 //   console.log('Time: ', Date.now())
    next()
})



// define the home page route
router.post('/',async (req, res) => {
  console.log(req.body.id)
    res.send('Your Index number i '+req.body.id)

})





// define the about route
router.get('/checkAllEmails',async (req, res) => {
    // Requesting data from database
    try {
        const email=await Email.find()
        res.json(email)
    }catch (e) {
        res.send('Error ' + e);
    }
   // res.send('About birds')
   // services("adssa","sfsdf","anbkj")
})

router.post('/sendEmail',async (req, res) => {



})



module.exports = router
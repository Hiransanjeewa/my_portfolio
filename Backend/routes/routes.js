const express = require('express')
const router = express.Router()

const Db=require('../database/db')

// Email services
const EmailService = require('../services/emailService')
const send = require("send");





// middleware that is specific to this router
router.use((req, res, next) => {
 //   console.log('Time: ', Date.now())
    next()
})



// define the home page route
// router.post('/',async (req, res) => {
//   console.log(req.body.id)
//     res.send('Your Index number i '+req.body.id)
//
// })





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
    let response;


        // response= await EmailService.sendEmail(req.body)
        //
        // res.send(await EmailService.sendEmail(req.body))
        // console.log(response)




    (async () => {
        response=await EmailService.sendEmail(req.body)

    })().then(async r => {
        console.log(response)
        res.send(response)
    })


    // console.log(response)



  //  console.log(response)


})



module.exports = router
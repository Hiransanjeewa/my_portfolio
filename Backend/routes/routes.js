const express = require('express')
const router = express.Router()


const services = require('../services/blogServicesImpl')
const Db=require('../database/db')

// Email services
const Email = require('../models/Emails')




// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})



// define the home page route
router.post('/',async (req, res) => {
  console.log(req.body.id)
    res.send('Your Index number i '+req.body.id)
    //services("adssa","sfsdf","anbkj")
})

router.get('/checkEmail/:email',async (req,res)=>{

    try {



        console.log(typeof (emails));

        res.json(emails)



    }catch (e) {
        res.send('Error ' + e);
    }


    // try{
    //     const email = await Email.findById(req.params.id)
    //     const emaill="hiransanjeewaa@gmail.com"
    //     res.json(email);
    // }catch (e) {
    //     res.send('Error '+e)
    // }
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
    const email = new Email({
        email : req.body.email,
        name  : req.body.name,
        message : req.body.message

    });
    // trying to store data in Database
    try{
       const Emails= await email.save()
        res.json(Emails)
    }catch (e) {
        res.send("Error " + e)
    }

    //services("adssa","sfsdf","anbkj")
})



module.exports = router
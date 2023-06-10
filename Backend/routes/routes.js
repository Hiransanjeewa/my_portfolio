const express = require('express')
const router = express.Router()


const services = require('../services/blogServicesImpl')
//router.use(services)




// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})



// define the home page route
router.post('/', (req, res) => {
  console.log(req.body.id)
    res.send('Your Index number is '+req.body.id)
    //services("adssa","sfsdf","anbkj")
})



// define the about route
router.post('/about', (req, res) => {
    res.send('About birds')
   // services("adssa","sfsdf","anbkj")
})



module.exports = router
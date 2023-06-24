const express = require('express')
const router = express.Router()

const Db=require('../database/db')

// Email services
const EmailService = require('../services/emailService')
const send = require("send");
const axios = require("axios");
const Email = require("../models/Emails");
const ArticleIds = require("../models/ArticleIds");
const schedule = require("node-schedule");

const my_medium_id = '5bb14012dbd3';





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
    // try {
    //     const email=await Email.find()
    //     res.json(email)
    // }catch (e) {
    //     res.send('Error ' + e);
    // }
   // res.send('About birds')
   // services("adssa","sfsdf","anbkj")










    // const axios = require('axios');
    //
    // const options = {
    //     method: 'GET',
    //     url: 'https://medium2.p.rapidapi.com/article/5756b59e1138',
    //     headers: {
    //         'X-RapidAPI-Key': '78f26e88dcmshf87d454d9d409f3p101091jsned77dfdafda3',
    //         'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
    //     }
    // };
    //
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //
    //     console.error(error);
    // }

// Content
    // const axios = require('axios');
    //
    // const options = {
    //     method: 'GET',
    //     url: 'https://medium2.p.rapidapi.com/article/5756b59e1138/content',
    //     headers: {
    //         'X-RapidAPI-Key': '78f26e88dcmshf87d454d9d409f3p101091jsned77dfdafda3',
    //         'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
    //     }
    // };
    //
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }





})

router.post('/sendEmail',async (req, res) => {
    let response=0;


    response =await EmailService.sendEmail(req.body)
    res.send(response)


    // const  responsee= {
    //     associated_articles:[
    //         '5756b59e1138',
    //         '8e4f107100a',
    //         'd9b805e19f37',
    //         '80be9084c3a8',
    //         'c31dae2284f3',
    //         '3060786317a0',
    //         '5cc4c488250a'
    //     ]
    // }
    // const  articleCount=responsee.associated_articles.length
    //
    // // Getting existing ids
    // const oldArticleIds = await ArticleIds.find()
    // const oldArticleCount = Object.keys(oldArticleIds).length
    //
    //
    //  for (let i = 0; i < articleCount; i++) {
    //
    //      if (oldArticleCount<=i){
    //
    //              const article_id = new ArticleIds({
    //                  article_id: responsee.associated_articles[i],
    //              });
    //              const ArticleId = await article_id.save()
    //
    //      }
    //
    //      }

})

const ArticleReceiver = require('../services/ArticleReceiver')
const j = schedule.scheduleJob({hour: 17, minute: 1}, () => {
    ArticleReceiver.getArticles();
    console.log('Job runs every day at 16.46AM');
});

module.exports = router
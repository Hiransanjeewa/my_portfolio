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
const ArticleReceiver = require('../services/ArticleReceiver')
const ArticleService = require('../services/ArticleServiceImpl')

const my_medium_id = '5bb14012dbd3';

// middleware that is specific to this router
router.use((req, res, next) => {
 //   console.log('Time: ', Date.now())
    next()
})


router.post('/sendEmail',async (req, res) => {
    let response=0;
    response =await EmailService.sendEmail(req.body)
    res.json(response)
})
router.get('/getArticles',async (req, res) => {
        const response=await  ArticleService.getArticles(req.query.category) ;
   // console.log('*********')
    res.json(response)
})
router.get('/getProjects',async (req, res) => {
    const response=await  ProjectService.getProjects(req.query.project) ;
  //  console.log('*********')
    res.json(response)
})










// Automated Medium articles updater
const j = schedule.scheduleJob({hour: 18, minute: 11}, () => {
    ArticleReceiver.getArticles();
    console.log('Job runs every day at 16.46AM');
});

module.exports = router
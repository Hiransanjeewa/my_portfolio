const express = require('express')
const router = express.Router()
const cors = require('cors');

router.use(cors())
const Db=require('../database/db')


// Email services
const EmailService = require('../services/emailService')
const send = require("send");
const axios = require("axios");
const Email = require("../models/Emails");
const ArticleIds = require("../models/ArticleIds");
const schedule = require("node-schedule");

const ArticleService = require('../services/ArticleServiceImpl')
const ProjectService = require('../services/ProjectService')
 const ArticleGetter = require('../services/ArticleReceiveService')


const my_medium_id = '5bb14012dbd3';

// middleware that is specific to this router
router.use((req, res, next) => {
 //   console.log('Time: ', Date.now())
    next()
})

router.post('/api/sendEmail',async (req, res) => {
    let response=0;
    response =await EmailService.sendEmail(req.body)
    console.log('Sending Emails')
    res.json(response)
})
router.get('/api/getArticles',async (req, res) => {
        const response=await  ArticleService.getArticles(req.query.category) ;
    console.log('Getting Articles')
    res.json(response)
})
router.get('/api/getProjects',async (req, res) => {
    const response=await  ProjectService.getProjects(req.query.project) ;
    console.log('Getting Projects')
    console.log(response)
    res.json(response)
})


// Automated Medium articles updater
const j = schedule.scheduleJob({hour: 23, minute: 55}, () => {
    console.log('Job runs every day at 6.00PM');
    // ArticleGetter.getArticles();
    // Article receiver commented due because maximum api requests used for the monthe - july 
    // It will be available from next month
    console.log('Job runs every day at 6.00PM');
});



module.exports = router
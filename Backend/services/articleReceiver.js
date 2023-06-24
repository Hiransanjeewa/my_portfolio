const express = require('express')
const Articles = require("../models/Articles");
const ArticleIds = require("../models/ArticleIds");
const schedule = require("node-schedule");





// getting all publications
const axios = require('axios');

async function getArticles() {

    const options = {
        method: 'GET',
        url: 'https://medium2.p.rapidapi.com/user/5bb14012dbd3/articles',
        headers: {
            'X-RapidAPI-Key': '78f26e88dcmshf87d454d9d409f3p101091jsned77dfdafda3',
            'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response);
        const articleCount = response.data.associated_articles.length

        // Getting existing ids
        const oldArticleIds = await ArticleIds.find()
        const oldArticleCount = Object.keys(oldArticleIds).length


        for (let i = 0; i < articleCount; i++) {

            if (oldArticleCount <= i) {

                const article_id = new ArticleIds({
                    article_id: response.data.associated_articles[i],
                });
                const ArticleId = await article_id.save()

            }

        }

    } catch (error) {
        console.error(error);
    }
}

module.exports = {getArticles};
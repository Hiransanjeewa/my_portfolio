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
      //  console.log(response);
        const articleCount = response.data.associated_articles.length

        // Getting existing ids
        const oldArticleIds = await ArticleIds.find()
        const oldArticleCount = Object.keys(oldArticleIds).length


        for (let i = 0; i < articleCount; i++) {

            const article_id = new ArticleIds({
                article_id: response.data.associated_articles[i],
            });
            if (oldArticleCount <= i) {
                const ArticleId = await article_id.save()

            }
            const articlesList = await Articles.find()
            const ArticlesCount = Object.keys(articlesList).length

            if (ArticlesCount<=i){

                const axios = require('axios');
                console.log(article_id)
                const options = {
                    method: 'GET',
                    url: 'https://medium2.p.rapidapi.com/article/'+article_id.article_id,
                    headers: {
                        'X-RapidAPI-Key': '78f26e88dcmshf87d454d9d409f3p101091jsned77dfdafda3',
                        'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
                    }
                };

                try {
                    const response = await axios.request(options);
                    console.log(response.data);

                    const article = new Articles({
                        article_id : response.data.id,
                        last_modified_at : response.data.last_modified_at,
                        url :response.data.url,
                        image_url : response.data.image_url,
                        title : response.data.title,
                        subtitle : response.data.subtitle,
                        category : " ",
                    });
                    const newArticle = await article.save()

                  //  console.log(response.data);
                } catch (error) {

                    console.error(error);
                }
           }


       }

   } catch (error) {
       console.error(error);
   }
}

module.exports = {getArticles};
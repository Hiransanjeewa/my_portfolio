const express = require('express')
const Articles = require("../models/Articles");



async function getArticles(category) {
    let ArticlesCount=0;
   
        const articlesList = await Articles.find()
        ArticlesCount = Object.keys(articlesList).length

   
        console.log(e)
    
    var response=[];
    //console.log(category)
    if (category !== "any") {
        for (let i = 0; i < ArticlesCount; i++) {
            if (articlesList[i].category===category){
               // console.log(articlesList[i].category);
                const count=response.length
                response[count]=articlesList[i];
            }
        }
        //console.log(response)
        return response;
    }else {
        return articlesList;
    }
}

module.exports = {getArticles};
const express = require('express')
const Articles = require("../models/Articles");



async function getArticles(category) {
    const articlesList = await Articles.find()
    const ArticlesCount = Object.keys(articlesList).length
    var response=[];
    if (category !== "any") {
        for (let i = 0; i < ArticlesCount; i++) {
            if (articlesList[i].category===category){
               // console.log(articlesList[i].category);
                response[i]=articlesList[i];
            }
        }
        return response;
    }else {
        return articlesList;
    }
}

module.exports = {getArticles};
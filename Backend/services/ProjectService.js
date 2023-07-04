const express = require('express')
const Projects = require("../models/Projects");


async function getProjects(project) {
    const projectsList = await Projects.find()
    const ProjectsCount = Object.keys(projectsList).length
    var response=[];
    console.log(project)
    if ((project !== null)||(project !== 'any')) {
        for (let i = 0; i < ProjectsCount; i++) {
            if (projectsList[i].title===project){
                // console.log(articlesList[i].category);
                const count=response.length
                response[count]=projectsList[i];
            }
        }
        //console.log(response)
        return response;
    }else {
        return projectsList;
    }
}

module.exports = {getProjects};

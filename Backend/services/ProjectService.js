const express = require('express')
const Projects = require("../models/Projects");


async function getProjects(project) {
    const projectsList = await Projects.find()
    const ProjectsCount = Object.keys(projectsList).length
    var response=[];
    //console.log(project)
    if ((project !== null)&&(project !=="any")) {
        for (let i = 0; i < ProjectsCount; i++) {
           // console.log(projectsList[i].points[0]);
            if (projectsList[i].title.toUpperCase()===project.toUpperCase()){
                const count=response.length
                response[count]=projectsList[i];
            }
        }
        //console.log(response)
        //console.log(" ********** ")

        return response;
    }else {

       // console.log("sending project list")
        return projectsList;
    }
}

module.exports = {getProjects};

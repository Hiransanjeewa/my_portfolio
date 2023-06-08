import React from 'react'
import ProjectViewer from '../components/project_viewer'
//import MessageSender from '../components/message_sender'
import "./projects.css"
import Footer from '../components/footer';
import Header from '../components/header';

export default function Projects() {
const style={
  project_viewers:{
    color:"white",
  }
}




  return (

  
<div>
  <Header/>
<ProjectViewer name="desktop"/>

    <div class="container-fluid text-light" id=" ">
      <div class="row ">
      <div class="col col-lg-4" id='project_viewers' style={style.project_viewers}>

      <ProjectViewer/>
        </div>
        <div class="col-lg-4 d-flex "  id='project_viewers'>
          
      <ProjectViewer/>
        </div>
        <div class="col-lg-4 d-flex "  id='project_viewers'>
          <ProjectViewer/>
            </div>
            <div class="col-lg-4 d-flex "  id='project_viewers'>
          <ProjectViewer/>
            </div>
      </div>
    </div>
    <Footer/>
    </div>
    

);
}

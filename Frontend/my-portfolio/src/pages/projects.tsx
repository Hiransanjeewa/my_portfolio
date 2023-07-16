
import React, { useState, useEffect } from 'react';
import "./projects.css"
import Footer from '../components/footer';
import Header from '../components/header';


import Projectviewer from '../components/project_viewer';

import axios from 'axios';

interface Props {
  // Define your props types here, if applicable
}

const Projects: React.FC<Props> = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  let project = queryParameters.get("project")
  //console.log(project)

  if (project===null) {
    project='any'
    console.log(project)
  }

// const style={
//   project_viewers:{
//     color:"white",
//   }
// }

//const [blogs, setBlogs] = useState<any[]>([]);
//if (project!==null) {
  const [project_Contents, setProjects] = useState<any[]>([]);


  useEffect(() => {
    axios
    
      .get('http://172.17.0.1:8080/getProjects?project='+project)
      .then(response => {
        //console.log(response.data.length);
        let projectSet:React.ReactComponentElement<typeof Projectviewer, any>[] = [];
        
        if (response.data.length===1) {
          var projectData = response.data[0];
          projectData.device='desktop';
          const projectElement = <><div  id='projectViewers'><Projectviewer projectData={projectData} /></div></>;
          projectSet.push(projectElement);  
        }else{
          for (let index = 0; index < response.data.length; index++) {
            //console.log(response.data);
            projectData = response.data[index];
            //projectData.device='desktop';
            //console.log(projectData);
            const project_link="/projects?project="+projectData.title

            
           

            const projectElement = <><div className="col col-lg-4" id='projectViewers'><a id='projectlink' href={project_link}><Projectviewer projectData={projectData} /></a></div> </>;
           // console.log(projectElement );
           projectSet.push(projectElement);       
          }
        }
        setProjects(projectSet);
        //console.log(project_Contents)
      })  
      .catch(error => {
        console.error('Error fetching Projects:', error);
      });
  }, [project, project_Contents]);
//   }

  return (
    <div id='main_div'>

  
<div>
  <Header htmlContent=''/>
  <div className="row ">
  {project_Contents}
        </div>
  
{/* <Projectviewer htmlContent='desktop'/> */}

    {/* <div className="container-fluid text-light" id=" ">
      <div className="row ">
      <div className="col col-lg-4" id='project_viewers' style={style.project_viewers}>

      <Projectviewer htmlContent=''/>
        </div>
        <div className="col-lg-4 d-flex "  id='project_viewers'>
          
      <Projectviewer htmlContent=''/>
        </div>
        <div className="col-lg-4 d-flex "  id='project_viewers'>
          <Projectviewer htmlContent=''/>
            </div>
            <div className="col-lg-4 d-flex "  id='project_viewers'>
          <Projectviewer htmlContent='' />
            </div>
      </div>
    </div> */}
    <Footer htmlContent=''/>
    </div>
    









    </div>
  );
};


export default Projects;
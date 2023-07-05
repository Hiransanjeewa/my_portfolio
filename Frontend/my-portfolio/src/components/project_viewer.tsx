

import React from 'react';
import "./project_viewer.css"

interface Project {
  _id: string;
  project_no:Number;
  title:String;
  content:String;
  points:String[];
  device:String;
  // Add other properties here
}

interface Props {
  projectData: Project;
}

 
const Projectviewer: React.FC<Props> = ({ projectData}) => {
  // ...

  // ...
 // console.log('*****')

  var htmlContent=projectData.device
  var name=htmlContent;
  console.log(projectData)
 // console.log(htmlContent)

  
  var styles = {
    secondMain:{
      padding:"10px",
      color:"white",
    },
    contentCaption:{
      fontSize:"40px",
      color:"white",
      textAllign:"center",
    },
    contents:{
     fontSize:"20px",
     paddingLeft:"20px",
     color:"white",
    },
}
  if (name==='desktop') {
    styles = {
      secondMain:{
        padding:"10px",
        color:"white",
      },
      contentCaption:{
        fontSize:"40px",
        color:"white",
        textAllign:"center",
        
      },
      contents:{
       fontSize:"20px",
       paddingLeft:"20px",
       color:"white",
      },
  
  }
}

   const project_content:String=projectData.content.substring(0,250);
   const project_link="/projects?project="+projectData.title
  return (
    <div>
    <div id="main_div">
      
     
      <div className="container  mw-100" id="second_main_div" style={styles.secondMain}>
        <div className="row ">
          <div className="col col-lg-12">
            <p id="main_caption" >
             
            </p>
          </div>
        </div>
        {/* <div className="row justify-content-md-center">
          <div className="col col-lg-6" id="second_caption">
            I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
            from University of Kelaniya. Full Stack developer
          </div>
        </div> */}
      </div>

<div>
      <div className="container-fluid text-light" id='second_main'>
      <a id='projectlink' href={project_link}>

      
      <div className="col col-lg-12 p-3" >
           
           <img src={require('../pages/my_profile_image.jpg')}    className="img-fluid "  alt="profile"  id="image"/>

          </div>
          
        <div className="row ">
        
          <div className="col-lg-12 d-flex  p-3" >
            <p id="contents" style={styles.contents}>
              <span id="content_caption" style={styles.contentCaption}>{projectData.title}</span>
              <br />
              <br />
              {/* Debbie had taken George for granted for more than fifteen years
              now. He wasn't sure what exactly had made him choose this time and
              place to address the issue, but he decided that now was the time. */}

              {project_content}
              <br />
              <br /> 
              <ul>
                <li id='li'>Debbie had taken George for granted for more than fifteen years
              now.dddddddddd44 Debbie had taken George for granted for more than fifteen years
              now.dddddddddd44 </li>
              <li id='li'>Debbie had taken George for granted for more than fifteen years
              now. </li>
              <li id='li'>Debbie had taken George for granted for more than fifteen years
              now. </li>
              </ul>

             
            </p>
          </div>
     
        </div>
        </a>
      </div>
      </div>
     
    </div>


    </div>
  );
};

export default Projectviewer;

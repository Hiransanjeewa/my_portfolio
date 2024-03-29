
import React, { useState,useEffect } from 'react';

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

// const style ={
//   backgroudSetter: {
//     backgroundColor: 'white',
//   }
// }

 
const Projectviewer: React.FC<Props> = ({ projectData}) => {
  // ...

  // ...
 // console.log('*****')
 console.log(projectData.points)

  var htmlContent=projectData.device
  var name=htmlContent;
 // console.log(projectData)
 // console.log(htmlContent)

 const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };
 





   const [project_points, setProjectPoints] = useState<any[]>([]);
  
         //console.log(response.data.length);
         let projectPointSet:React.ReactComponentElement<typeof Projectviewer, any>[] = [];
         

         function getPoints() {
          
         if (projectData.points.length>1) {
           for (let index = 0; index < projectData.points.length; index++) {
             
             var projectPoints =  setPointLengths(name, projectData.points[index])  ;
             const projectElement = <><li id='li'> {projectPoints}</li> </>
            projectPointSet.push(projectElement);       
           }
          }
          return projectPointSet
        }

        useEffect(() => {
          setProjectPoints(getPoints());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);


function setPointLengths(name:String,point:String) {
  let projectPoints:String;

  if (name==='desktop') {
    projectPoints=point;
  }else{
    const project_content:String=point.substring(0,100);
    projectPoints=project_content+"..."
  }
  return projectPoints;
}






  var styles = {

    second_main:{
      backgroundColor: isHover ? ' rgb(42, 60, 37)' : 'rgb(42, 37, 37) '
    },
    secondMain:{
      padding:"10px",
     
      color:"white",
    },
    contentCaption:{
      fontSize:"40px",
      color:"white",
      textAllign:"center",
      backgroundColor: 'rgb(42, 37, 37)',
    },
    contents:{
     fontSize:"20px",
     paddingLeft:"20px",
     color:"white",
     backgroundColor: 'rgb(42, 37, 37)',
    },
   
}
let project_content:String=GetContent(name);


function GetContent(name:String) {
  let project_contentt:String;

  if (name==='desktop') {
    project_contentt=projectData.content;
  }else{
    const project_content:String=projectData.content.substring(0,250);
    project_contentt=project_content+"..."
  }
  return project_contentt;
}


  if (name==='desktop') {

    styles = {
      second_main:{
        backgroundColor: isHover ? 'black' : 'black'
      },

      secondMain:{
        padding:"10px",
        color:"white",
       
      },
      contentCaption:{
        fontSize:"40px",
        color:"white",
        textAllign:"center",
        backgroundColor: 'black',
      },
      contents:{
       fontSize:"20px",
       paddingLeft:"20px",
       color:"white",
       backgroundColor: 'black',
      },
  
  }
}


   //const project_link="/projects?project="+projectData.title

  //  const link = <a id='projectlink' href={project_link}>;
  //  const link_end = </a>


   //document.getElementById('projectlink').innerHTML=' '
  return (
    <div>
    <div id="main_div">
      
     
      <div className="container  mw-100" id="second_main_div" style={styles.secondMain}>
        <div className="row ">
          <div className="col col-lg-12 ">
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
      <div className="container-fluid text-light" id='second_main' style={styles.second_main} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     
      {/* <a id='projectlink' href={project_link}> */}
     

      
      <div className="col col-lg-12 p-3" >
           
           <img src={require('../project_images/'+projectData.title+'.jpg')}    className="img-fluid "  alt="profile"  id="image"/>

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
              <ul >

              
              <span style={styles.contents}>{project_points}</span>
            
             
                {/* <li id='li'>Debbie had taken George for granted for more than fifteen years
              now.dddddddddd44 Debbie had taken George for granted for more than fifteen years
              now.dddddddddd44 </li>
              <li id='li'>Debbie had taken George for granted for more than fifteen years
              now. </li>
              <li id='li'>Debbie had taken George for granted for more than fifteen years
              now. </li> */}
              </ul>

             
            </p>
          </div>
     
        </div>
        {/* </a> */}
      
      </div>
      </div>
     
    </div>


    </div>
  );
};

export default Projectviewer;

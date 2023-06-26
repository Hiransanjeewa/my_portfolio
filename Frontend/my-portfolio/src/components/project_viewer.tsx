

import React from 'react';
import "./project_viewer.css"



interface Props {
  htmlContent: string;
}


interface ProjectData {
  _id: string;
  article_id: string;
  last_modified_at: string;
  url: URL;
  image_url: string;
  title:String;
  content:String;
  // Add other properties here
}

interface Props {
  blogData: BlogData;
}

 
const Projectviewer: React.FC<Props> = ({ htmlContent }) => {

  var name=htmlContent;
  
  var styles = {
    secondMain:{
      padding:"10px",
      color:"white",
    },
    contentCaption:{
      fontSize:"40px",
      color:"white",
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
      },
      contents:{
       fontSize:"20px",
       paddingLeft:"20px",
       color:"white",
      },
  
  }
}
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
      <div className="container-fluid text-light">
      <div className="col col-lg-12 p-3" >
           
           <img src={require('../pages/my_profile_image.jpg')}    className="img-fluid "  alt="profile"  id="image"/>

          </div>
          
        <div className="row ">
        
          <div className="col-lg-12 d-flex  p-3" >
            <p id="contents" style={styles.contents}>
              <span id="content_caption" style={styles.contentCaption}>An E-Commerce Website Using React + Springboot + MySQL</span>
              <br />
              <br />
              Debbie had taken George for granted for more than fifteen years
              now. He wasn't sure what exactly had made him choose this time and
              place to address the issue, but he decided that now was the time.
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
      </div>
      </div>
     
    </div>


    </div>
  );
};

export default Projectviewer;

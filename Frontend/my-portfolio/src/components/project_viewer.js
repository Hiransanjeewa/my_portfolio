import React from 'react'
import "./project_viewer.css"
import profile_img from "../pages/my_profile_image.jpg"


export default function ProjectViewer(props) {
  var name=props.name;
  var styles = { }
  if (name==='desktop') {
    styles = {
      secondMain:{
        padding:"10px",
      },
      contentCaption:{
        fontSize:"40px",
      },
      contents:{
       fontSize:"20px",
       paddingLeft:"20px",
      },

      
  
  }
}
  return (
    
    <div id="main_div">
     
      <div class="container  mw-100" id="second_main_div" style={styles.secondMain}>
        <div class="row ">
          <div class="col col-lg-12">
            <p id="main_caption" >
              <strong>
                <span id="caption_span1"> Book </span>{" "}
                <span id="caption_span2"> Mart</span>
              </strong>
            </p>
          </div>
        </div>
        {/* <div class="row justify-content-md-center">
          <div class="col col-lg-6" id="second_caption">
            I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
            from University of Kelaniya. Full Stack developer
          </div>
        </div> */}
      </div>

<div>
      <div class="container-fluid text-light">
      <div class="col col-lg-12 p-3" >
            <img
              src={profile_img}
              class="img-fluid "
              alt="profile"
              id="image"
            />
          </div>
          
        <div class="row ">
        
          <div class="col-lg-12 d-flex  p-3" >
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
  );
}


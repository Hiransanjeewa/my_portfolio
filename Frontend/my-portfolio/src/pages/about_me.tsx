


import React from 'react';
import "./about_me.scss";

import Header from "../components/header";
import Footer from "../components/footer";

interface Props {
  htmlContent: string;
}


const AboutMe: React.FC<Props> = ({ htmlContent }) => {

const style ={
  main_caption:{
    fontSize: "350%",
  },
  content_caption:{
    color:"white",
  }
}



  return (
  <div>




  <div id="main_div">
    <Header htmlContent=' '/>

    <div className="container text-center mw-100" id="second_main_div">
      <div className="row justify-content-md-center">
        <div className="col col-lg-6">
          <p id="main_caption" style={style.main_caption}>
            <strong>
              <span id="caption_span1">ABOUT </span>{" "}
              <span id="caption_span2">ME</span>
            </strong>
          </p>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col col-lg-6" id="second_caption">
          I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
          from University of Kelaniya. Full Stack developer
        </div>
      </div>
    </div>

<div>
    <div className="container-fluid text-light" >
      <div className="row ">
        <div className="col col-lg-6" >

        <img src={require('./my_profile_image.jpg')} alt="profile" style={{ width: '65%',height: '90%px', fontWeight: 'bold' }}/>

  

        </div>
        <div className="col-lg-6 d-flex " id=" ">
          <p id="contents">
            <span id="content_caption" style={style.content_caption}>A Little About Myself</span>
            <br />
            <br />
            <span id="temp">
            Devops , Cloud and Full Stack Development Enthusiast, Who is looking for 
            an Internship opportunity. I am a quick learner and that's makes me
            easy to adapt new technologies.
            <br /> <br />
            I am a good communicator and i have good team work skills and i can work collaboratively
            with others. I have good problem solving skills , time management and leadership
            skills .
            <br />
            <br /> Currently following Net Centric , Mobile Computing  and Data Science domains in my degree program. 
            My goal is to contribute to DevOps practices that enhance productivity, reliability, and overall efficiency in software development.
          
            </span>
          </p>
        </div>
        <Footer htmlContent=' '/>
      </div>
    </div>
    </div>
    
  </div>


  </div>
  );
};

export default AboutMe;
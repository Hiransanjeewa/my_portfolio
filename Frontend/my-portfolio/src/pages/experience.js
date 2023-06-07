import React from "react";
import "./experience.css";
import Header from "../components/header";
import Footer from "../components/footer";
import profile_img from "./my_profile_image.jpg";


export default function Experience() {


 // var frontend=["react","redux","javascript"]
  return (
    <div id="main_div">
      <div class="container-fluid text-light">
        <Header />
        <br />
        <div class="row" id="main_div">
          <div class="col col-lg-6">
            <img
              src={profile_img}
              class="img-fluid "
              alt="profile"
              id="image"
            />
          </div>
          <div class="col-lg-6 d-flex " id=" ">
            <p id="contents">
              <span id="content_caption">Experience</span>
              <br />
              <br />
              Debbie had taken George for granted for more than fifteen years
              now. He wasn't sure what exactly had made him choose this time and
              place to address the issue, but he decided that now was the time.
              <br />
              <br /> He looked straight into her eyes and just as she was about
              to speak, turned away and walked out the door. Sarah watched the
              whirlpool mesmerized.
              <br /> <br />
              She couldn't take her eyes off the water swirling around and
              around. She stuck in small twigs and leaves to watch the whirlpool
              catch them and then suck them down. It bothered her more than a
              little bit that this could also be used as a metaphor for her
              life. <br />
              <br />
              <button type="button" class="btn btn-secondary btn-lg">
                Download CV
              </button>
            </p>
          </div>
          <div class="container-fluid text-light">
          <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>



<div class="row" id="cards">
  <div class="col" id="cards">
    <div class="collapse multi-collapse" id="multiCollapseExample1" >
      <div class="card card-body" id="cards">
        
      <img src={require('../components/skills/react.jpg')} alt="xc " id="skills"/>
      <img src={require('../components/skills/redux.jpg')} alt=" xc" id="skills"/>
      <img src={require('../components/skills/javascript.jpg')} alt="xc " id="skills"/>
      </div>
    </div>
  </div>
  <div class="col" >
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body" id="cards">
     asdsad
      </div>
    </div>
  </div>
  <div class="col" >
    <div class="collapse multi-collapse" id="multiCollapseExample3">
      <div class="card card-body" id="cards">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div> 
          </div>
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

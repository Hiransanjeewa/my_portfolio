// import React from "react";
// import "./about_me.scss";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import profile_img from "./my_profile_image.jpg";

// export default function AboutMe() {

//   const style ={
//     main_caption:{
//       fontSize: "350%",
//     },
//     content_caption:{
//       color:"white",
//     }
    

//   }
//   return (
//     <div id="main_div">
//       <Header />

//       <div className="container text-center mw-100" id="second_main_div">
//         <div className="row justify-content-md-center">
//           <div className="col col-lg-6">
//             <p id="main_caption" style={style.main_caption}>
//               <strong>
//                 <span id="caption_span1">ABOUT </span>{" "}
//                 <span id="caption_span2">ME</span>
//               </strong>
//             </p>
//           </div>
//         </div>
//         <div className="row justify-content-md-center">
//           <div className="col col-lg-6" id="second_caption">
//             I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
//             from University of Kelaniya. Full Stack developer
//           </div>
//         </div>
//       </div>

// <div>
//       <div className="container-fluid text-light" id=" ">
//         <div className="row ">
//           <div className="col col-lg-6">
//             <img
//               src={profile_img}
//               className="img-fluid "
//               alt="profile"
//               id="image"
//             />
//           </div>
//           <div className="col-lg-6 d-flex " id=" ">
//             <p id="contents">
//               <span id="content_caption" style={style.content_caption}>A Little About Myself</span>
//               <br />
//               <br />
//               <span id="temp">
//               Debbie had taken George for granted for more than fifteen years
//               now. He wasn't sure what exactly had made him choose this time and
//               place to address the issue, but he decided that now was the time.
//               <br />
//               <br /> He looked straight into her eyes and just as she was about
//               to speak, turned away and walked out the door. Sarah watched the
//               whirlpool mesmerized.
//               <br /> <br />
//               She couldn't take her eyes off the water swirling around and
//               around. She stuck in small twigs and leaves to watch the whirlpool
//               catch them and then suck them down. It bothered her more than a
//               little bit that this could also be used as a metaphor for her
//               life.</span>
//             </p>
//           </div>
//           <Footer/>
//         </div>
//       </div>
//       </div>
      
//     </div>
//   );
// }



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
    <div className="container-fluid text-light" id=" ">
      <div className="row ">
        <div className="col col-lg-6">
         
      <img src={require('./my_profile_image.jpg')} id="image" alt="profile" className="img-fluid "/>

        </div>
        <div className="col-lg-6 d-flex " id=" ">
          <p id="contents">
            <span id="content_caption" style={style.content_caption}>A Little About Myself</span>
            <br />
            <br />
            <span id="temp">
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
            life.</span>
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
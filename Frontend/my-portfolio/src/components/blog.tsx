// import React from 'react'
// import './blog.scss'
// import profile_img from "../pages/my_profile_image.jpg"

// const style = {
//   main_div : {
//     backgroundColor : "white",
//   }
// }


// export default function Blog() {
  
//     return (
      
    
//       <div id="main_div" style={style.main_div}>
       

//         <div className="container  mw-100" id="second_main_div" >
//           <div className="row ">
//             <div className="col col-lg-12">
//               <p id="main_caption" >
//                 <strong>
//                 <span id="content_caption" >An E-Commerce Website Using React + Springboot + MySQL</span>

//                 </strong>

               
                
//               </p>
//             </div>
//           </div>
//           {/* <div classNames="row justify-content-md-center">
//             <div classNames="col col-lg-6" id="second_caption">
//               I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
//               from University of Kelaniya. Full Stack developer
//             </div>
//           </div> */}
//         </div>
//   <div>
//         <div className="container-fluid text-light">
//         <div className="col col-lg-12 p-3" >
//               <img
//                 src={profile_img}
//                 classNames="img-fluid "
//                 alt="profile"
//                 id="image"
//               />
//             </div>
            
//           <div className="row ">
          
//             <div className="col-lg-12 d-flex  p-3" >
//               <span id="contents" >
//                 {/* <span id="content_caption" >An E-Commerce Website Using React + Springboot + MySQL</span> */}
               
               
//                 Debbie had taken George for granted for more than fifteen years
//                 now. He wasn't sure what exactly had made him choose this time and
//                 place to address the issue, but he decided that now was the time.
//                 <br />
//                 <br /> 
//                 <ul>
//                   <li id='li'>Debbie had taken George for granted for more than fifteen years
//                 now.dddddddddd44 Debbie had taken George for granted for more than fifteen years
//                 now.dddddddddd44 </li>
//                 <li id='li'>Debbie had taken George for granted for more than fifteen years
//                 now. </li>
//                 <li id='li'>Debbie had taken George for granted for more than fifteen years
//                 now. </li>
//                 </ul>
  
               
//               </span>
//             </div>
       
//           </div>
//         </div>
//         </div>
        
     
//       </div>
//     );
//   }



import React from 'react';
import './blog.scss'

interface Props {
  blogData: String[];
}

const style = {
  main_div : {
    backgroundColor : "white",
  }
}

const HtmlRenderer: React.FC<Props> = ({ blogData }) => {
 
  return (
    <div>
    
      <div id="main_div" style={style.main_div}>
       

        <div className="container  mw-100" id="second_main_div" >
          <div className="row ">
            <div className="col col-lg-12">
              <p id="main_caption" >
                <strong>
                <span id="content_caption" >An E-Commerce Website Using React + Springboot + MySQL</span>

                </strong>
                
              </p>
            </div>
          </div>
          {/* <div classNames="row justify-content-md-center">
            <div classNames="col col-lg-6" id="second_caption">
              I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
              from University of Kelaniya. Full Stack developer
            </div>
          </div> */}
        </div>
  <div>
        <div className="container-fluid text-light">
        <div className="col col-lg-12 p-3" >
              
              <img src={require('../pages/my_profile_image.jpg')}  className="img-fluid "   alt="profile"  id="image"/>

            </div>
            
          <div className="row ">
          
            <div className="col-lg-12 d-flex  p-3" >
              <span id="contents" >
                {/* <span id="content_caption" >An E-Commerce Website Using React + Springboot + MySQL</span> */}
               
               
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
  
               
              </span>
            </div>
       
          </div>
        </div>
        </div>
        
     
      </div>
 
  


      
    </div>
  );
};

export default HtmlRenderer;



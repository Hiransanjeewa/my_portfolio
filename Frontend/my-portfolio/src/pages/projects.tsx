// import React from 'react'
// import Projectviewer htmlContent='' from '../components/project_viewer'
// //import MessageSender from '../components/message_sender'
// import "./projects.css"
// import Footer from '../components/footer';
// import Header from '../components/header';

// export default function Projects() {
// const style={
//   project_viewers:{
//     color:"white",
//   }
// }


//   return (

  
// <div>
//   <Header/>
// <Projectviewer htmlContent='' name="desktop"/>

//     <div className="container-fluid text-light" id=" ">
//       <div className="row ">
//       <div className="col col-lg-4" id='project_viewers' style={style.project_viewers}>

//       <Projectviewer htmlContent=''/>
//         </div>
//         <div className="col-lg-4 d-flex "  id='project_viewers'>
          
//       <Projectviewer htmlContent=''/>
//         </div>
//         <div className="col-lg-4 d-flex "  id='project_viewers'>
//           <Projectviewer htmlContent=''/>
//             </div>
//             <div className="col-lg-4 d-flex "  id='project_viewers'>
//           <Projectviewer htmlContent=''/>
//             </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
    

// );
// }



import React from 'react';
//import MessageSender from '../components/message_sender'
import "./projects.css"
import Footer from '../components/footer';
import Header from '../components/header';
import Projectviewer from '../components/project_viewer';

interface Props {
  // Define your props types here, if applicable
}

const Projects: React.FC<Props> = () => {

const style={
  project_viewers:{
    color:"white",
  }
}
  return (
    <div>

  
<div>
  <Header htmlContent=''/>
<Projectviewer htmlContent='desktop'/>

    <div className="container-fluid text-light" id=" ">
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
    </div>
    <Footer htmlContent=''/>
    </div>
    









    </div>
  );
};


export default Projects;
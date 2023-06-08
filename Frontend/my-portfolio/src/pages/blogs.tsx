// import React from 'react'
// import Blog from "../components/blog"
// import "./blogs.scss"
// import Footer from '../components/footer';
// import Header from '../components/header';

// export default function Blogs() {

//     return (

//       <div >
//       <Header />
//           <div className="container-fluid text-light" id="main_div">
//             <div className="row ">
//             <div className="col col-lg-4" id='projectViewers'>
      
//             <Blog/>
//               </div>
//               <div className="col-lg-4 d-flex "  id='projectViewers'>
                
//             <Blog/>
//               </div>
//               <div className="col-lg-4 d-flex "  id='projectViewers'>
//                 <Blog/>
//                   </div>
//                   <div className="col-lg-4 d-flex "  id='projectViewers'>
//                 <Blog/>
//                   </div>
//             </div>
//           </div>
//           <Footer/>
//           </div>
          
      
//       );
//       }
      


import React from 'react';
import Blog from "../components/blog"
import "./blogs.scss"
import Footer from '../components/footer';
import Header from '../components/header';

interface Props {
  htmlContent: string;
}

const Blogs: React.FC<Props> = ({ htmlContent }) => {
  return (
    <div>

  <div >
  <Header htmlContent=''/>
      <div className="container-fluid text-light" id="main_div">
        <div className="row ">
        <div className="col col-lg-4" id='projectViewers'>
  
        <Blog htmlContent=''/>
          </div>
          <div className="col-lg-4 d-flex "  id='projectViewers'>
            
        <Blog htmlContent=''/>
          </div>
          <div className="col-lg-4 d-flex "  id='projectViewers'>
            <Blog htmlContent=''/>
              </div>
              <div className="col-lg-4 d-flex "  id='projectViewers'>
            <Blog htmlContent=''/>
              </div>
        </div>
      </div>
      <Footer htmlContent=''/>
      </div>
      

    </div>
  );
};

export default Blogs;
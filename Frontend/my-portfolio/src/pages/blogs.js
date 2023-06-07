import React from 'react'
import Blog from "../components/blog"
import "./blogs.scss"

export default function Blogs() {

    return (

      <div >
      
          <div className="container-fluid text-light" id="main_div">
            <div className="row ">
            <div className="col col-lg-4" id='project_viewers'>
      
            <Blog/>
              </div>
              <div className="col-lg-4 d-flex "  id='project_viewers'>
                
            <Blog/>
              </div>
              <div className="col-lg-4 d-flex "  id='project_viewers'>
                <Blog/>
                  </div>
                  <div className="col-lg-4 d-flex "  id='project_viewers'>
                <Blog/>
                  </div>
            </div>
          </div>
          </div>
          
      
      );
      }
      
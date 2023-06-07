import React from 'react'
import Blog from "../components/blog"
import "./blogs.css"

export default function Blogs() {

    return (

      <div >
      
          <div class="container-fluid text-light" id="main_div">
            <div class="row ">
            <div class="col col-lg-4" id='project_viewers'>
      
            <Blog/>
              </div>
              <div class="col-lg-4 d-flex "  id='project_viewers'>
                
            <Blog/>
              </div>
              <div class="col-lg-4 d-flex "  id='project_viewers'>
                <Blog/>
                  </div>
                  <div class="col-lg-4 d-flex "  id='project_viewers'>
                <Blog/>
                  </div>
            </div>
          </div>
          </div>
          
      
      );
      }
      
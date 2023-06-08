import React from 'react'
import Blog from "../components/blog"
import "./blogs.scss"
import Footer from '../components/footer';
import Header from '../components/header';

export default function Blogs() {

    return (

      <div >
      <Header />
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
          <Footer/>
          </div>
          
      
      );
      }
      
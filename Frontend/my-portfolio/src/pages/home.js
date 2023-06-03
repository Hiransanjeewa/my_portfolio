import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import "./home.css"
import profile_img from "./my_profile_image.jpg"

export default function Home() {
  return (
    <div>
  <Header/>
    <html>
        <head>
            <title>
             Hiran Sanjeewa
            </title>
            <script>

            </script>

        </head>
 
          

<div class="container-fluid text-light " id='homepage_body' >
  <div class="row ">
    <div class="col col-lg-6 " id='contents' >
      
    <span>Hi , I'm Hiran.</span>
              <p id='caption-1'>
                I am a full stack Developer.
              </p>
              <p >
                I'm a Third year software Engineering Undergraduate of University of Kelaniya
              </p>
              <span>
                <a href='about' class="text-decoration-none">
                See more about Me
                </a>
                <br/>
                
              </span>
    </div>
    <div class="col-lg-6 d-flex " id='img_div'>
    <img src={profile_img} class="img-fluid " alt="profile" />
    </div>
    
  </div>
  
</div>
<Footer / >
 

    </html>
 
    </div>
  )
}

import React from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import "./home.css"
import profile_img from "./my_profile_image.png"

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
 
          
            <div className='homepage_body'>
              
              <span>Hi , I'm Hiran.</span>
              <h1>
                I am a full stack Developer.
              </h1>
              <p>
                I'm a Third year software Engineering Undergraduate of university of kelaniya
              </p>
              <span>
                <a href='about'>
                See more about Me
                </a>
                
              </span>
              
            
            </div>
            <img src={profile_img} class="img-fluid" alt="profile" />

          
 

    </html>
  <Footer / >
    </div>
  )
}

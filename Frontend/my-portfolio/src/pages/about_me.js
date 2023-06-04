import React from 'react'
import "./about_me.css"
import Header from '../components/header'
import Footer from '../components/footer'

export default function AboutMe() {
  return (
    
<div id='main_div'>
<Header/>

<div class="container text-center"  >
  <div class="row justify-content-md-center">
    <div class="col col-lg-6">
    <p id='main_caption'>
         <strong><span id='caption_span1'> ABOUT </span> <span id='caption_span2'>ME</span></strong>
    </p>
      
    </div>
  
  </div>

  <div class="col-md-auto">
      Captions
    </div>
  <div class="row">
    <div class="col">
     Image
    </div>
    <div class="col-md-auto">
      About Me content
    </div>
    {/* <div class="col col-lg-2">
      3 of 3
    </div> */}
  </div>
</div>
<Footer/>
</div>
  )
}



import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "./home.css"


interface Props {
  htmlContent: string;
}

const Home: React.FC<Props> = ({ htmlContent }) => {
    const style ={
        contents:{
          color : "white",
        }
      }
      
  return (
    <div>

 
    <div>
  <Header htmlContent=' '/>
  
<div className="container-fluid text-light" id='homepage_body' >
  <div className="row " >
    <div className="col col-lg-6 md-6" id='contents' style={style.contents}>
      
    <span>Hi , I'm Hiran,</span>
              <p id='caption-1'>
                I am a full stack Developer.
              </p>
              <p >
                I'm a Third year software Engineering Undergraduate of University of Kelaniya
              </p>
              <span>
                <a href='about' className="text-decoration-none">
                See more about Me
                </a>
                <br/>
                
              </span>
    </div>
    <div className="col-lg-6 d-flex " id='img_div'>
    
    <img src={require('./my_profile_image.jpg')}className="img-fluid " alt="profile "/>
    </div>
    
  </div>
  
</div>
<Footer htmlContent='' / >

   
 
    </div>

    </div>
  );
};

export default Home;


import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import "./home.css"
import { isMobile } from 'react-device-detect';

interface Props {
  htmlContent: string;
}

const Home: React.FC<Props> = ({ htmlContent }) => {
  const style = {
    contents: {
      color: "white",
    },
    containerr: {
      minHeight: "100vh", // Ensure the container takes at least the full viewport height
      display: "flex",
      flexDirection: "column",
    },
    mainContent: {
      flex: 1, // Allow the main content to take the remaining available space
    },
    footer: {
      flexShrink: 0, // Prevent the footer from growing and taking extra space
    },
  };

  let horizontalSpace;
  if (!isMobile) {
    horizontalSpace = <><br/><br/><br/><br/></>;
  }

  return (
    <div style={style.containerr}>
      <Header htmlContent=' '/>

      <div className="container-fluid text-light" id='homepage_body' style={style.mainContent}>
        <div className="row">
          <div className="col col-lg-6 md-6" id='contents' style={style.contents}>
            {horizontalSpace}
            
            <span style={{ fontSize: '150%' }}>Hi , I'm Hiran Sanjeewa,</span>
            <p id='caption-1'>
              Cloud & DevOps Enthusiast
            </p>
            <p>
              I'm a Third year software Engineering Undergraduate at University of Kelaniya
            </p>
            <span>
              <a href='about' className="text-decoration-none" style={{ fontSize: '150%' }}>
                See more about Me
              </a>
              <br/>
            </span>
          </div>
          <div className="col-lg-6 d-flex " id='img_div' style={{ backgroundColor: 'black' }}>
            <div style={{ width: "12%" }}>
            </div>
            <div style={{ width: "76%", marginTop: "3%", backgroundColor: 'black' }}>
              <img src={require('./profile_image_new.jpeg')} alt="profile" style={{ width: '100%', height: '90%' }}/>
              <br/>
            </div>
          </div>
        </div>
      </div>

      <Footer htmlContent='' style={style.footer} />
    </div>
  );
};

export default Home;

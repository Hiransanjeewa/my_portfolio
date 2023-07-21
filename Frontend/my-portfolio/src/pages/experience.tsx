
import React from "react";
import "./experience.scss";
import Header from "../components/header";
import Footer from "../components/footer";



interface Props {
  htmlContent: string;
}


function closeCollapse(collapsename:string):void{

  
}

const Experience: React.FC<Props> = ({ htmlContent }) => {
  const style = {
    content_caption:{
      color:"white",
    },
    cards:{
      backgroundColor:"black",
    }

  }

  
  // class Calculte {
  //   age: number;
  //   constructor(age: number) {
  //     this.age = age;
  //   }
  //   getSummation() {
  //     console.log(`Hello, I'm ${this.age}!`);
  //   }

  // }

  // const sum = new Calculte(2);
  // sum.getSummation();

  

  return (

    
     // var frontend=["react","redux","javascript"]
    
        <div id="main_div">
         
          <div className="container-fluid text-light">
            <Header htmlContent=" "/>
            <br />
            <div className="row" id="main_div">
              <div className="col col-lg-6">
               
              <img src={require('./my_profile_image.jpg')} alt="profile" style={{ width: '65%',height: '90%px', fontWeight: 'bold' }}/>

              </div>
              <div className="col-lg-6 d-flex " id=" ">
                <p id="contents">
                  <span id="content_caption" style={style.content_caption}>Experience</span>
                  <br />
                  <br />
                  <span id="temp">
                  I still didn't have industrial experience in software engineering. But I 
                  have experience using React as a frontend library, Express and Springboot frameworks as
                  backend technologies. I have really good experience using MERN stack. 
                  <br />
                  <br /> Although i still didn't done any software engineering related job , I have
                  worked as a trainee in Bank of ceylon. It gives me opportunity to learn teamwork, 
                  collaboration and problem-solving skills. 
                  <br /> <br />
                  {/* She couldn't take her eyes off the water swirling around and
                  around. She stuck in small twigs and leaves to watch the whirlpool
                  catch them and then suck them down. It bothered her more than a
                  little bit that this could also be used as a metaphor for her
                  life. <br /> */}
                  <br />
                  </span>
                  {/* <button type="button" className="btn btn-secondary btn-lg">
                    Download CV
                  </button> */}
                </p>
              </div>
              <div className="container-fluid text-light">
              <p>
      <a className="btn btn-dark" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" onClick={() => closeCollapse('multiCollapseExample1')}>Frontend</a>
      <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Backend</button>
      <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Other</button>
    </p>
    
    <div className="row" id="cards">
      <div className="col" id="cards">
        <div className="collapse multi-collapse" id="multiCollapseExample1" >
          <div className="card card-body" id="cards"  style={style.cards}>
          <img src={require('../components/skills/react.jpg')} alt="xc " id="skills"/>
          <img src={require('../components/skills/redux.jpg')} alt=" xc" id="skills"/>
          <img src={require('../components/skills/javascript.jpg')} alt="xc " id="skills"/>
          </div>
        </div>
      </div>


      
      <div className="col" >
        <div className="collapse multi-collapse" id="multiCollapseExample2" >
          <div className="card card-body" id="cards" style={style.cards}>
          <img src={require('../components/skills/spring.jpg')} alt="xc " id="skills"/>
          <img src={require('../components/skills/express.jpg')} alt=" xc" id="skills"/>
          </div>
        </div>
      </div>
      <div className="col" >
        <div className="collapse multi-collapse" id="multiCollapseExample3">
          <div className="card card-body" id="cards" style={style.cards}>
          <img src={require('../components/skills/sql.jpg')} alt="xc " id="skills"/>
          <img src={require('../components/skills/mongodb.jpg')} alt=" xc" id="skills"/>
         </div>
        </div>
      </div>
    



    </div> 
              </div>
              <Footer htmlContent="no_message_sender"/>
            </div>
            
          </div>
        
        </div>
      );
    }




export default Experience;

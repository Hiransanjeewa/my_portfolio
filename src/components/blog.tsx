
import React from 'react';
import './blog.scss'


interface BlogData {
  _id: string;
  article_id: string;
  last_modified_at: string;
  url: URL;
  image_url: string;
  title:String;
  content:String;
  // Add other properties here
}

interface Props {
  blogData: BlogData;
}

const style = {
  main_div : {
    backgroundColor : "white",
  },
  title : {
    fontSize:24,
  }

}

const HtmlRenderer: React.FC<Props> = ({ blogData }) => {

  
 //console.log(blogData.content); // Accessing and printing the _id property of each object in the blogData array
    const str:String = blogData.content.substring(0,500);
  //const image_url=blogData.url
  return (
    <div>
      <a id='article_link' href={`${blogData.url}`}>

     
      <div id="main_div" className='main_div'  style={style.main_div}>
        <div className="container  mw-100" id="second_main_div" >
          <div className="row ">
            <div className="col col-lg-12">
              <p id="main_caption" >
                <strong>
                <span id="content_caption" style={style.title}>{blogData.title}</span>
                </strong>
              </p>
            </div>
          </div>
          {/* <div classNames="row justify-content-md-center">
            <div classNames="col col-lg-6" id="second_caption">
              I'm Hiran Sanjeewa. Third year Software Engineering Undergraduate
              from University of Kelaniya. Full Stack developer
            </div>
          </div> */}
        </div>
  <div>
        <div className="container-fluid text-light">
        <div className="col col-lg-12 p-3" >
              
              <img src={`${blogData.image_url}`}  className="img-fluid "   alt="profile"  id="image"/>

            </div>
            
          <div className="row ">
          
            <div className="col-lg-12 d-flex  p-3" >
              <span id="contents" >
                {/* <span id="content_caption" >An E-Commerce Website Using React + Springboot + MySQL</span> */}
               
                {str}
                 <span id='read_article'> |  Read complete article on medium</span>
  
               
              </span>
            </div>
       
          </div>
        </div>
        </div>
        
     
      </div>
 
      </a>
    </div>
  );
};

export default HtmlRenderer;



import React from 'react';
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import MessageSender from "./message_sender"

interface Props {
  htmlContent: string;
}


const Footer: React.FC<Props> = ({ htmlContent }) => {
  return(
  <div>
   
   <html>
     <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  </head>
  




 <div className="footer-dark footer-custom">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-2 item">
                        <h3>Blogs</h3>
                        <ul>
                            <li><a href="blogs?query=devops">Devops</a></li>
                            <li><a href="blogs?query=cloud-computing">Cloud computing</a></li>
                            <li><a href="blogs?query=web-development">Web development</a></li>
                            <li><a href="blogs">All Blogs</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-2 item">
                        <h3>Projects</h3>
                        <ul>
                            <li><a href="projects?project=Book-Mart">Book Mart (Web-Application)</a></li>
                            <li><a href="projects?project=Kids-Paradise">Kids Paradise </a></li>
                            <li><a href="projects?project=portfolio">My portfolio </a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 item text">
                        <h3>Contact Me</h3>
                   
                   <p >
                   <label>Email &nbsp;&nbsp;: hiransanjeewaa@gmail.com </label><br/>
                        <label>Mobile :  +94 702568106 </label>
                   </p>
                   
                      
                    </div>
                    <div className="col-sm-6 col-md-5 item">

                    <MessageSender htmlContent=' ' /> 
                    </div>
                    
                    
                </div>
                
                <p className='social_media_list'>
                <a href="https://www.facebook.com/profile.php?id=100005292945788" className="fa fa-facebook">
                </a>
                <a href="https://www.linkedin.com/in/hiran-sanjeewa-a672b4227/" className="fa fa-linkedin"> 
                </a>
                </p>
            </div>
          
        </footer>
    </div>

    </html>
  </div>) ;
};

export default Footer;


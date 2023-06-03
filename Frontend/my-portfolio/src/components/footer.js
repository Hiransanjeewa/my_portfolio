import React from 'react'
import "./footer.css"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import MessageSender from "./message_sender.js"


export default function Footer() {
  return (
    <div>
        <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 </head>
 <body>
 <div class="footer-dark footer-custom">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-2 item">
                        <h3>Blogs</h3>
                        <ul>
                            <li><a href="blogs?query=cloud-computing">Cloud computing</a></li>
                            <li><a href="blogs?query=web-development">Web development</a></li>
                            <li><a href="blogs">All Blogs</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-2 item">
                        <h3>Projects</h3>
                        <ul>
                            <li><a href="projects?book-mart">Book Mart (Web-Application)</a></li>
                            <li><a href="projects?kids-paradise">Kids Paradise </a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 item text">
                        <h3>Contact Me</h3>
                   
                   <p >
                   <label>Email &nbsp;&nbsp;: hiransanjeewaa@gmail.com </label><br/>
                        <label>Mobile :  +94 702568106 </label>
                   </p>
                   
                      
                    </div>
                    <div class="col-sm-6 col-md-5 item">
                    {<MessageSender/> }
                    </div>
                    
                    
                </div>
                
                <p className='social_media_list'>
                <a href="https://www.facebook.com/profile.php?id=100005292945788" class="fa fa-facebook">
                </a>
                <a href="https://www.linkedin.com/in/hiran-sanjeewa-a672b4227/" class="fa fa-linkedin"> 
                </a>
                </p>
            </div>
          
        </footer>
    </div>



</body>
</html>

    </div>
  )
}

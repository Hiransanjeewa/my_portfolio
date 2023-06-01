import React from 'react'
import "./footer.css"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function Footer() {
  return (

    <div>
        <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
 </head>
 <body>
 <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Blogs</h3>
                        <ul>
                            <li><a href="home.js">Cloud computing</a></li>
                            <li><a href="home.js">Web development</a></li>
                            <li><a href="home.js">All Blogs</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Projects</h3>
                        <ul>
                            <li><a href="home.js">Book Mart (Web-Application)</a></li>
                            <li><a href="home.js">Kids Paradise </a></li>
                            
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Contact Me</h3>
                       <table className='contact_details_table'>
                        <tr>
                            <td>  Email : </td> <td>    hiransanjeewaa@gmail.com   </td>
                        </tr>
                        <tr>
                            <td>  Mobile : </td> <td>    +94 702568106   </td>
                        </tr>
                        <tr>
                            <td>  Linkdin </td> 
                        </tr>

                       </table>
                    </div>
                </div>
               
            </div>
        </footer>
    </div>



</body>
</html>

    </div>
  )
}

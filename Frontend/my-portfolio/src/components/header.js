import React from 'react'


import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"

export default function Header() {
   
  return (
    <div className="header_main">

        <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

    </head>
  <body>




<nav className="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">

  <div className="container-fluid ">
    
   
    <div class="collapse navbar-collapse mr-3 fs-5" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <button class="btn btn-primary btn-lg">
          <a class="nav-link" href="home.js">Home</a>
          </button>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="home.js" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Blogs
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="home.js">Cloud Computing</a></li>
            <li><a class="dropdown-item" href="homne.js">Web development</a></li>
            <li><hr class="dropdown-divider" ></hr></li>
            <li><a class="dropdown-item" href="home.js">All blogs</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <button class="btn btn-tertiary fs-5">
          <a class="nav-link" href="home.js">Projects</a>
          </button>
        </li>
        <li class="nav-item">
        <button class="btn btn-tertiary fs-5">
          <a class="nav-link" href="home.js">Experence</a>
          </button>
        </li>
        <li class="nav-item" id="nav_item">
        <button class="btn btn-tertiary fs-5">
          <a class="nav-link" href="home.js">About Me</a>
          </button>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>

  </body>
  </html>
 
  <div className='mystyle'>
      sd
  </div>

    </div>
  )
}

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
    <a class="navbar-brand " href="home.js">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="home.js">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="home.js">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="home.js" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="home.js">Action</a></li>
            <li><a class="dropdown-item" href="homne.js">Another action</a></li>
            <li><hr class="dropdown-divider" ></hr></li>
            <li><a class="dropdown-item" href="home.js">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href='home.js'>Disabled</a>
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

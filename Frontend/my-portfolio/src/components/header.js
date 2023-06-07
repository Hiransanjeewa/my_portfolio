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
    <style>
  
    </style>
    </head>
 
<nav className="navbar navbar-expand-md navbar navbar-custom" data-bs-theme="dark" >
  <div className="container-fluid " id='maindiv'>
  <a className="navbar-brand" href="/"> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mr-3 fs-5" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0" id='navbutton'>
      <li className="nav-item">
        <button className="btn btn-tertiary btn-sm fs-5 " id='nav_buttons'>
          <a className="nav-link" href="/">Home</a>
          </button>
        </li>
        <li className="nav-item dropdown">
        <button className="btn btn-tertiary btn-sm fs-5">
          <a className="nav-link dropdown-toggle" href="/blogs" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Blogs
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/blogs">Cloud Computing</a></li>
            <li><a className="dropdown-item" href="/blogs">Web development</a></li>
            <li><hr className="dropdown-divider" ></hr></li>
            <li><a className="dropdown-item" href="/blogs">All blogs</a></li>
          </ul>
          </button>
        </li>
        <li className="nav-item" >
          <button className="btn btn-tertiary fs-5" >
          <a className="nav-link" href="/projects">Projects</a>
          </button>
        </li>
        <li className="nav-item">
        <button className="btn btn-tertiary fs-5">
          <a className="nav-link" href="/experience">Experience</a>
          </button>
        </li>
        <li className="nav-item" id="nav_item">
        <button className="btn btn-tertiary fs-5">
          <a className="nav-link" href="/about">About Me</a>
          </button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  </html>

    </div>
  )
}

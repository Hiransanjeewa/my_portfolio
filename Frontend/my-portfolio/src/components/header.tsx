import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./header.css"

interface Props {
  htmlContent: string;
}

const Header: React.FC<Props> = ({ htmlContent }) => {
  
  return (
    <div>
     

    <div className="header_main">
        <html>
            <head>
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
          <li><a className="dropdown-item" href="/blogs?category=devops">Devops</a></li>
            <li><a className="dropdown-item" href="/blogs?category=Cloud computing">Cloud Computing</a></li>
            <li><a className="dropdown-item" href="/blogs?category=Web development">Web development</a></li>
            <li><hr className="dropdown-divider" ></hr></li>
            <li><a className="dropdown-item" href="/blogs">All blogs</a></li>
          </ul>
          </button>
        </li>
        <li className="nav-item" >
          <button className="btn btn-tertiary fs-5" >
          <a className="nav-link" href="/projects?project=any">Projects</a>
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

    </div>
  );
};

export default Header;

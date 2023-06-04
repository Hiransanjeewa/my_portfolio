import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/home';
import AboutMe from './pages/about_me';
import Experience from './pages/experience';
import Blogs from './pages/blogs';

 


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/experience" element={<Experience />}/>
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

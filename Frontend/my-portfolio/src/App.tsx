// import React from 'react';
//  import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';


// // import Home from './pages/home';
// // import AboutMe from './pages/about_me';
// // import Experience from './pages/experience';
// // import Blogs from './pages/blogs';
// // import Projects from './pages/projects';

 


// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<Home />}/>
//         <Route path="/about" element={<AboutMe />}/>
//         <Route path="/blogs" element={<Blogs />}/>
//         <Route path="/experience" element={<Experience />}/>
//         <Route path="/projects" element={<Projects />}/> */}

//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }
// export default App;



import React from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App: React.FC = () => {
  const htmlContent = ' ';


  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Header htmlContent={ htmlContent }/>}/>
        {/* <Route path="/about" element={<AboutMe />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/projects" element={<Projects />}/> */}

      </Routes>
    </BrowserRouter>
      <h1>Render HTML with React</h1>
      {/* <Header htmlContent={htmlContent} /> */}
    </div>
  );
};

export default App;

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


import React, { lazy, Suspense } from 'react';
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home';
import Experience from './pages/experience';
import AboutMe from './pages/about_me';
import Projects from './pages/projects';

// Use React.lazy to asynchronously load the Blogs component
const Blogs = lazy(() => import('./pages/blogs'));

const App: React.FC = () => {
  const htmlContent = '';

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home htmlContent={htmlContent} />} />
          <Route path="/" element={<Footer htmlContent={htmlContent} />} />
          <Route path="/about" element={<AboutMe htmlContent="" />} />
          <Route path="/experience" element={<Experience htmlContent="" />} />

          <Route
            path="/blogs"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Blogs />
              </Suspense>
            }
          />

          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
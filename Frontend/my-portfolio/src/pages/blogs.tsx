import React, { useState } from 'react'
import {useEffect} from 'react'
import Blog from "../components/blog"
import "./blogs.scss"
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';
import { response } from 'express';

interface Props {
  htmlContent: string;
}
let blogList:React.JSX.Element[]=[ 
  
];



 function getArticles(category:String) {



  axios.get('http://localhost:8080/getArticles?category=cloud computing').then(response => {
    console.log(response.data) ;
    blogList.push( <Blog blogData={response.data[0]}/>)

    for (let index = 0; index < response.data.length; index++) {
      blogList.push( <Blog blogData={response.data[index]}/>)
      
    }
    // response.data.forEach((blog : String[],index)=>{
    //   blogList.push( <Blog blogData={blog}/>)
    //   })
  })
  return blogList
   
}

function Blogs(){

  const [isLoading, setLoading] = useState(true)
  const [blogList, setBlogList] = useState();

  let blogs:React.JSX.Element[]=[ ];


  useEffect(() => {
    axios.get('http://localhost:8080/getArticles?category=cloud computing').then(response => {

    for (let index = 0; index < response.data.length; index++) {
      blogs.push( <Blog blogData={response.data[index]}/>)

    }
      setLoading(false);
     
    });
  });

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }else{

    console.log('bjh')
    return (
      <div className="App">
       
        {blogs}
      </div>
    );
  }







  
//   //const Blogss= await getArticles('cloud computing')

// //const : React.FC<Props> = async (props: Props) => {

// console.log(Blogs)

//   return (
//     <div>
//   <div >
//   <Header htmlContent=''/>
//       <div className="container-fluid text-light" id="main_div">
//         <div className="row ">
//         <div className="col col-lg-4" id='projectViewers'>
  
//         {}
//           </div>
          
//         </div>
//       </div>
//       <Footer htmlContent=''/>
//       </div>
      

//     </div>
//   );
// };
//console.log(typeof(Blogs))
    }
export default Blogs
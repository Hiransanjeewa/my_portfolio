import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from '../components/blog';
import './blogs.css';
import Footer from '../components/footer';
import Header from '../components/header';
import {isMobile} from 'react-device-detect';


interface Props {
  // Define your props types here, if applicable
}

const style = {
  main_div : {
    backgroundColor : 'aliceblue',
  },
  
}

const Blogs: React.FC<Props> = () => {

  const queryParameters = new URLSearchParams(window.location.search)
  let category = queryParameters.get("category")
  console.log(category)
  if (category===null) {
    category='any'
  }

  const [blogs, setBlogs] = useState<any[]>([]);

 
  useEffect(() => {
    axios
      .get('https://hiransanjeewa.live/api/getArticles?category='+category)
      .then(response => {
        console.log(response.data);
        let blogSet:React.ReactComponentElement<typeof Blog, any>[] = [];

       


        for (let index = 0; index < response.data.length; index++) {
         // console.log(response.data[index]);
          const blogData = response.data[index];
          console.log(blogData);
          let blogElement=<> </>

          if (isMobile) {
            blogElement = 
            <div className="col col-lg-4" id='projectViewers'><Blog blogData={blogData} /></div>
            
          }else{
            blogElement =  
            <div className="col col-lg-4" id='projectViewers'><Blog blogData={blogData} /></div>
            
          }       
            
         // console.log(blogElement );
         
          blogSet.push(blogElement); 
          
          if (isMobile) {
            blogSet.push(<hr/>)
          }

          
        }
        let rawBlogSet:React.ReactComponentElement<typeof Blog, any>[] = [];

        if (!isMobile) {
          rawBlogSet.push(<><div className="container-fluid text-light" id="main_div" style={style.main_div}>
        <div className="row " > {blogSet}</div></div></>
          )
        setBlogs(rawBlogSet);
        }else{
          rawBlogSet.push(<><div className="container" id="main_div" style={style.main_div}>
          <div className="column ">   {blogSet}</div></div></>
            )
          setBlogs(rawBlogSet);
        }
        
          
    
          
      //  console.log(blogs)
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, [blogs, category]);
  

//console.log(blogs)
  return (
    <div>
      <Header htmlContent=' ' />

      <div id='mainblogsdiv'>
      {blogs}

      </div>
      
     
   
   

       <Footer htmlContent=' '/>
    </div>
  );
};

export default Blogs;



































// interface Props {
//   htmlContent: string;
// }
// let blogList:React.JSX.Element[]=[ 
  
// ];


//  function getArticles(category:String) {


//   axios.get('http://localhost:8080/getArticles?category=cloud computing').then(response => {
//     console.log(response.data) ;
//     blogList.push( <Blog blogData={response.data[0]}/>)

//     for (let index = 0; index < response.data.length; index++) {
//       blogList.push( <Blog blogData={response.data[index]}/>)
      
//     }
//     // response.data.forEach((blog : String[],index)=>{
//     //   blogList.push( <Blog blogData={blog}/>)
//     //   })
//   })
//   return blogList
   
// }

// //const Blogs: React.FC<Props> = (props: Props) => {



// // class Blogs extends React.Component {
// //    url = 'http://localhost:8080/getArticles?category=cloud computing'
// //   render() {
// //     return <h2>Hi, I am a Car!</h2>;
// //   }
// // }
  
// export default function Blogs(){
  
  
//   axios.get('http://localhost:8080/getArticles?category=cloud computing').then(response => {
//       const Data = response.data
//       console.log(Data)
//   })
  


// }




















  
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
     
// export default Blogs
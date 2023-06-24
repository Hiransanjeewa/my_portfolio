import React from 'react';
import Blog from "../components/blog"
import "./blogs.scss"
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';

interface Props {
  htmlContent: string;
}

const Blogs: React.FC<Props> = ({ htmlContent }) => {
 



  async function getArticles(category:String) {
    type Article = {
      id: number;
      title: string;
      link: string;
      content: string;
      image_link: string;
    };

    type GetUsersResponse = {
      data: Article[];
    };
  
      // 👇️ const data: GetUsersResponse
      const { data, status } = await axios.get<GetUsersResponse>(
        'http://localhost:3001/getArticles?category='+category,
        {
          headers: {
            Accept: 'application/json',
          },
        },
        
      );
    console.log(data);

}
getArticles('cloud computing')



  return (
    <div>

  <div >
  <Header htmlContent=''/>
      <div className="container-fluid text-light" id="main_div">
        <div className="row ">
        <div className="col col-lg-4" id='projectViewers'>
  
        <Blog htmlContent=''/>
          </div>
          <div className="col-lg-4 d-flex "  id='projectViewers'>
            
        <Blog htmlContent=''/>
          </div>
          <div className="col-lg-4 d-flex "  id='projectViewers'>
            <Blog htmlContent=''/>
              </div>
              <div className="col-lg-4 d-flex "  id='projectViewers'>
            <Blog htmlContent=''/>
              </div>
        </div>
      </div>
      <Footer htmlContent=''/>
      </div>
      

    </div>
  );
};

export default Blogs;
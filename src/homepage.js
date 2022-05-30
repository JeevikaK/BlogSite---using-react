import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

 const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:9000/blogs');
    
  return (
      <div className="home">
          {/* code wont execute at the initial value of null */}
        { isPending && <div>Loading...</div> }
        {blogs && <BlogList blogs = {blogs} title="All Blogs" /> }
        { error && <div>{ error }</div>}

        {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs" handleDelete={handleDelete}/> */}
      </div>
    
  );
};

export default Home;

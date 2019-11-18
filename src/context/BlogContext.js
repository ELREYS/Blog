import React, { useState, useReducer } from "react";
import  createDataContext from './createDataContext'

const BlogContext = React.createContext();

const listofBlogs = [
  {
    blog: "First Blog 1",
    id: "1"
  },
  {
    blog: "First Blog 2",
    id: "2"
  },
  {
    blog: "First Blog 3",
    id: "3"
  }
];

const blogReducer = (state, action) => {
  // state === {data:string ,id:string}
  // action === {type: 'addBlogPost' || 'deleteBlogPost' || 'editBlogPost'}
  switch (action.type) {
    case "addBlogPost":
      console.log(state);
      return [...state, { blog: "Blog", id: `${state.length + 1}` }];
    default:
      return state;
  }
};



export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const [blogPost, dispatch] = useReducer(blogReducer, listofBlogs);

  const addBlogPost = () =>{
    dispatch({type:'addBlogPost'});
}


  return (
    <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

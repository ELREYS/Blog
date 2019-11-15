import React, { useState, useReducer } from "react";

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

const reducer = (state, action) => {
  // state === {data:string ,id:string}
  // action === {type: 'addBlogPost' || 'deleteBlogPost' || 'editBlogPost'}
  switch (action.type) {
    case "addBlogPost":
      console.log(state);
      return [...state, { blog: "Scheisse", id: `${state.length + 1}` }];
    default:
      break;
  }
};

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);
  const [state, dispatch] = useReducer(reducer, listofBlogs);

  

  return (
    <BlogContext.Provider value={{ data: state, customfunc: dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

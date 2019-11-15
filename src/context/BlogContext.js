import React, { useState } from "react";

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

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  const addBlogPost = () => {
    setBlog([...blog, { blog: `New Blog #${blog.length + 1}`, id: `${blog.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blog, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

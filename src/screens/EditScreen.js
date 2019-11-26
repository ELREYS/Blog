import React, { useContext,useState } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  //console.log(navigation);
  id = navigation.getParam("id");
  //title = navigation.getParam("title");
  //content = navigation.getParam("content");
  

  const { state,editBlogPost } = useContext(Context);

  blogDetails = state.find(blogPost => blogPost.id === id);
  [title,setTitle] = useState(blogDetails.title);
  [content,setContent] = useState(blogDetails.content);

  console.log("EditScreen:"+state);
  

  return (
   <BlogPostForm 
   initialValues={{title,content}}
   onSubmit={(title,content)=> {
        editBlogPost(id,title,content,() => navigation.pop())
   }}/>
  )};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderColor: "red",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    height: 140,
    padding: 5,
    borderWidth: 2,
    backgroundColor: "#f2f2f2"
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  content: {
    fontSize: 18
  },

  AddContent: {
    marginRight: 15
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }

});

export default EditScreen;

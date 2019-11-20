import React, { useContext,useState } from "react";
import { Button,TextInput,Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";

import { Feather } from "@expo/vector-icons";

const EditScreen = ({ navigation }) => {
  //console.log(navigation);
  id = navigation.getParam("id");
  //title = navigation.getParam("title");
  //content = navigation.getParam("content");
  

  const { state,editBlogPost } = useContext(Context);

  blogDetails = state.find(blogPost => blogPost.id === id);
  [title,setTitle] = useState(blogDetails.title);
  [content,setContent] = useState(blogDetails.content);



  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={content => setContent(content)}
      />
      <Button
        title="Save Change"
        onPress={() => {
            editBlogPost(id,title, content), navigation.navigate("Index");
        }}
      />
      </View>
  );
};

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

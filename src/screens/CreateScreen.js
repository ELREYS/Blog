import React, { useContext, useState } from "react";
import { TextInput, Text, StyleSheet, View, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  console.log(navigation.getParam("id"));
  id = navigation.getParam("id");

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const { state, addBlogPost } = useContext(Context);

  blogDetails = state.find(blogPost => blogPost.id === id);

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
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content), navigation.navigate("Index");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default CreateScreen;

import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";

import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  console.log(navigation);
  id = navigation.getParam("id");
  title = navigation.getParam("title");
  content = navigation.getParam("content");

  const { state } = useContext(Context);

  blogDetails = state.find(blogPost => blogPost.id === id);
  console.log(blogDetails);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogDetails.title}</Text>
      <Text>{blogDetails.content}</Text>
    </View>
  );
};

 ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <Feather
      style={styles.AddContent}
        onPress={() => navigation.navigate("EditScreen",{id: navigation.getParam("id")})}
        name="edit"
        size={30}
      />
    )
  };
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
    backgroundColor: "#f2f2f2",
    
  },
  
  title: {
    fontSize:20,
    marginBottom: 20,
    fontWeight:"bold",
    textDecorationLine:'underline',
       
  },
  content: {
    fontSize: 18,
  },

  AddContent:{
    marginRight:15,
  }
});

export default ShowScreen;

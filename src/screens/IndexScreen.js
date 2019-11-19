import React, { useContext, useEffect } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  View,
  Button
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";




const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  console.log(state.length);
  console.log(state);
  

  return (
    <View>
      <Button title="Add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={state => state.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show',{id:item.id})}>
          <View style={styles.container}>
            <Text style={styles.title}>
              {item.blog}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather style={styles.icon} name="trash" />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "black",
    backgroundColor: "#f2f2f2"
  },
  title: {
    fontSize: 18,
    marginLeft: 10
  },
  icon: {
    fontSize: 24,
    paddingRight: 10
  }
});



export default IndexScreen;

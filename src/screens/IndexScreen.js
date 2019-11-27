import React, { useContext, useEffect } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  View
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(
    Context
  );
  //console.log(state.length);
  //console.log(state);

  useEffect(() => {
    console.log("I start useEffect");
    
    getBlogPosts();

    const listener = navigation.addListener("didFocus", () => {
      console.log("I run this Functions inside useEffect");
      
      getBlogPosts();
    });

    return ()=> {
      console.log("I leave useEffect");
      
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={state => state.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id
              )}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <Feather
        style={styles.AddContent}
        onPress={() => navigation.navigate("CreateScreen")}
        name="plus"
        size={30}
      />
    )
  };
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
  },
  AddContent: {
    marginRight: 15
  }
});

export default IndexScreen;

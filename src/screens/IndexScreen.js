import React, { useContext, createRef } from "react";
import { FlatList, Text, StyleSheet, View, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  //console.log(state);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={state => state.id}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}>
              {item.blog} {item.id}
            </Text>
            <Feather style={styles.icon} name="trash" />
          </View>
        )}
      />
      <Button title="Add post" onPress={addBlogPost} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingVertical:20,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'black',
    backgroundColor: "#f2f2f2", 
  },title:{
      fontSize:18,
     marginLeft:10

  },
  icon:{
      fontSize:24
  }
});

export default IndexScreen;

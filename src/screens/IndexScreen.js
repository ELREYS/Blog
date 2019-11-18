import React, { useContext, createRef } from "react";
import { FlatList, Text, StyleSheet, View, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  //console.log(state);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        style={styles.container}
        data={state}
        keyExtractor={state => state.id}
        renderItem={({ item }) => (
          <Text>
            {item.blog} {item.id}
          </Text>
        )}
      />
      <Button
        title="Add post"
        onPress={addBlogPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    marginLeft: 10,
    marginTop: 15,
    marginRight: 15
  }
});

export default IndexScreen;

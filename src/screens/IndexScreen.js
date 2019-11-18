import React, { useContext, createRef } from "react";
import { FlatList, Text, StyleSheet, View, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        style={styles.container}
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item }) => (
          <Text>
            {item.blog} {item.id}
          </Text>
        )}
      />
      <Button
        title="Add post"
        onPress={() => {
          addBlogPost({
            type: "addBlogPost",
            blog: `Test #${data.lenghth + 1}`,
            id: `${data.lenghth + 1}`
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    marginLeft: 10,
    marginTop: 15,
    marginRight:15,
  }
});

export default IndexScreen;

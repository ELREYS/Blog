import React, { useContext, createRef } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  Button
} from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  console.log(data);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item }) => <Text>{item.blog}</Text>}
      />
      <Button
        title="Add post"
        onPress={addBlogPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;

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
  const { data, customfunc } = useContext(BlogContext);
  console.log(data);

  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item }) => <Text>{item.blog} {item.id}</Text>}
      />
      <Button
        title="Add post"
        onPress={() => {
            customfunc({type:'addBlogPost', blog: `Test #${data.lenghth + 1}` ,id:`${data.lenghth + 1}`})
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;

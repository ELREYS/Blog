import React,{useContext} from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { Context } from '../context/BlogContext';


const ShowScreen = ({navigation}) =>{
console.log(navigation.getParam("id"));
id = navigation.getParam("id")

const {state} = useContext(Context)

blogDetails = state.find((blogPost) => blogPost.id === id)

return (

<View>
    <Text>Item id: {blogDetails.blog}</Text>
</View>

);
}


const styles = StyleSheet.create({


})


export default ShowScreen;
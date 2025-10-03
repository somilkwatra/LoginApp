import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login/Login';
import Posts from '../Screens/AllPosts/AllPosts';
import PostDetails from '../Screens/Posts/Posts';

export type RootStackParamList = {
  Login: undefined;
  Posts: undefined;
  PostDetails: { postId: number };
};

const {Navigator,Screen} = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login">
        <Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Screen name="Posts" component={Posts} options={{ title: 'All Posts' }} />
        <Screen name="PostDetails" component={PostDetails} options={{ title: 'Post Details' }} />
      </Navigator>
    </NavigationContainer>
  );
}

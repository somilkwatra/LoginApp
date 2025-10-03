import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import Login from '../Screens/Login/Login';
import PostDetails from '../Screens/Posts/Posts';
import AllPosts from '../Screens/AllPosts/AllPosts';

export type RootStackParamList = {
  Login: undefined;
  Posts: undefined;
  PostDetails: { postId: number };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          animation: 'default',
          ...(Platform.OS === 'ios' ? { animationTypeForReplace: 'pop' } : {}),
        }}
      >
        <Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Screen
          name="Posts"
          component={AllPosts}
          options={{ title: 'All Posts' }}
        />
        <Screen
          name="PostDetails"
          component={PostDetails}
          options={{ title: 'Post Details' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
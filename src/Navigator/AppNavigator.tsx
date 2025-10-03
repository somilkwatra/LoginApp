import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home/Home';
import Counter from '..//Screens/Counter/Couner';
import PostDetails from '../Screens/Posts/Posts';

type RootStackParamList = {
  Home: undefined;
  PostDetails: { postId: number };
};

const Tab = createBottomTabNavigator();
const {Navigator,Screen} = createNativeStackNavigator<RootStackParamList>();

// Stack Navigator for Home + PostDetails
function HomeStack() {
  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#5a9ef7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Screen
        name="Home"
        component={Home} // your existing Home component
        options={{ title: 'Home' }}
      />
      <Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: 'Post Details' }}
      />
    </Navigator>
  );
}

// Tab Navigator
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          tabBarActiveTintColor: '#5a9ef7',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopColor: '#5a9ef7',
            borderTopWidth: 1,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: 'Home' }}
        />
        <Tab.Screen
          name="Counter"
          component={Counter}
          options={{ title: 'Counter' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

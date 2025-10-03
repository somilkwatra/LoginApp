import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, TouchableOpacity, Text } from 'react-native';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import Counter from '../Screens/Counter/Counter';
import PostDetails from '../Screens/Posts/Posts';

type RootStackParamList = {
  Login: undefined;
  MainTabs: undefined; // Tab Navigator as a screen
};

type HomeStackParamList = {
  Home: undefined;
  PostDetails: { postId: number };
};

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

// Stack Navigator for Home + PostDetails
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#5a9ef7' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Hide header for Home screen
      />
      <HomeStack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: 'Post Details' }}
      />
    </HomeStack.Navigator>
  );
}

// Tab Navigator for HomeStack and Counter
function MainTabNavigator() {
  return (
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
        component={HomeStackNavigator}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Counter"
        component={Counter}
        options={{ title: 'Counter' }}
      />
    </Tab.Navigator>
  );
}

// Root Stack Navigator with Login and MainTabs
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          animation: 'default',
          ...(Platform.OS === 'ios' ? { animationTypeForReplace: 'pop' } : {}),
          headerStyle: { backgroundColor: '#5a9ef7' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <RootStack.Screen
          name="MainTabs"
          component={MainTabNavigator}
          options={({ navigation }) => ({
            title: 'Home',
            headerLeft: () => null, // Hide back button to prevent going back to Login
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.replace('Login')}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
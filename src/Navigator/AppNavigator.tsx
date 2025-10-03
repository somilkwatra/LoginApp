import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, TouchableOpacity, Text } from 'react-native';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import PostDetails from '../Screens/Posts/Posts';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
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
          headerStyle: { backgroundColor: '#5a9ef7ff' },
          headerTintColor: '#ffffffff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: 'Home',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.replace('Login')}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: '#ffffffff', fontSize: 16 }}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
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
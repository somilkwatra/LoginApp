import React from 'react';
import { View } from 'react-native';
import { enableScreens } from 'react-native-screens'; // Enable screens
import AppNavigator from './Navigator/AppNavigator';

// Enable screens before rendering
enableScreens();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
}
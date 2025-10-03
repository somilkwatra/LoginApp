import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator'; // Adjust path

type Props = NativeStackScreenProps<RootStackParamList, 'PostDetails'>;

export default function PostDetails({ route }: Props) {
  const { postId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Post Details Screen for Post ID: {postId}</Text>
    </View>
  );
}
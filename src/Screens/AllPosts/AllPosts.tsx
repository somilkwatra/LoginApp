import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator'; // Adjust path

type Props = NativeStackScreenProps<RootStackParamList, 'Posts'>;

export default function AllPosts({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>All Posts Screen</Text>
      <Button
        title="Go to Post Details"
        onPress={() => navigation.navigate('PostDetails', { postId: 1 })}
      />
    </View>
  );
}
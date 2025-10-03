import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigator/AppNavigator';
import {styles} from './styles';
import { fetchPostById, Post } from '../../Api/api'; 

type Props = NativeStackScreenProps<RootStackParamList, 'PostDetails'>;

export default function PostDetails({ route }: Props) {
  const { postId } = route.params;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPostById(postId)
      .then((data: Post) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching post details:', error);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text style={styles.body}>{post?.body}</Text>
    </View>
  );
}
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from './styles';
import { fetchPosts, Post } from '../../Api/api';

type Props = NativeStackScreenProps<any, 'Home'>;

export default function Home({ navigation }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts()
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity
      style={styles.postItem}
      onPress={() => navigation.navigate('PostDetails', { postId: item.id })}
    >
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postBody}>{item.body.substring(0, 50)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 50 }} // leave space for fixed footer
        style={styles.list}
      />

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>End of List</Text>
      </View>
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Post, fetchPosts} from '../api';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  if (!posts) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {posts.map((post, index) => (
        <View key={index}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default PostList;

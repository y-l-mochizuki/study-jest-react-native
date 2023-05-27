import {View, Text} from 'react-native';
import React from 'react';

const Post = ({title, body}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default Post;

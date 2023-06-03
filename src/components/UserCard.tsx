import React from 'react';
import {Image, Text, View} from 'react-native';

type Props = {
  user?: {
    avatar?: string;
    name?: string;
    description?: string;
  };
};

export const UserCard = ({user}: Props) => {
  return (
    <View>
      <Image testID="user-avatar" source={{uri: user?.avatar}} />
      <Text testID="user-name">{user?.name}</Text>
      <Text testID="user-description">{user?.description}</Text>
    </View>
  );
};

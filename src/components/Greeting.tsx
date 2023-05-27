import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  name: string;
};

const Greeting = ({name}: Props) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default Greeting;

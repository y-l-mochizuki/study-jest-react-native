import React from 'react';
import {Button} from 'react-native';

type Props = {
  onPress: () => void;
  title: string;
};

export const CustomButton = ({onPress, title}: Props) => {
  return <Button onPress={onPress} title={title} accessibilityLabel={title} />;
};

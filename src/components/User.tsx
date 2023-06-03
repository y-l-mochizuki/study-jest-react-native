import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchUserData = async (id: string) => {
  return {id: '1', name: 'John Doe'};
};

type Props = {
  id: string;
};

const User = ({id}: Props) => {
  const [user, setUser] = useState<{
    id: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    fetchUserData(id).then(userData => setUser(userData));
  }, [id]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default User;

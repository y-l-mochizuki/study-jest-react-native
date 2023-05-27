import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {User, fetchUser} from './src/api';

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser().then(userData => {
      setUser(userData);
    });
  }, []);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default App;

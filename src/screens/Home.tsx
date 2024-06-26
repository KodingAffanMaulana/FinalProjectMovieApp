import React from 'react';
import { View, Text, Button } from 'react-native';

const Home: React.FC<any> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Movie Detail"
        onPress={() => navigation.navigate('MovieDetail')}
      />
    </View>
  );
};


export default Home;
import React from 'react';
import { View, Text, Button } from 'react-native';

const MovieDetail: React.FC<any> = ({ navigation }) => {

  return (
    <View >
      <Text >Detail movie</Text>
      <Button title="Back to Home" onPress={() => {
        navigation.goBack();
      }} />
    </View>
  );
};


export default MovieDetail;

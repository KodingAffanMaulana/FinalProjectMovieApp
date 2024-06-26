import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();


const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
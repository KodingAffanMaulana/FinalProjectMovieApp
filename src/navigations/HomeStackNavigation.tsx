import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

type HomeStackParamList = {
  HomeScreen: undefined;
  MovieDetail: { id: number };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#371A61',
      },
      headerTitle: 'Movie App',
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;

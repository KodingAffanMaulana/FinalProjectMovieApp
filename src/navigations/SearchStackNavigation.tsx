import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import CategorySearchResult from '../screens/CategorySearchResult';

type SearchStackParamList = {
    Search: undefined;
    CategorySearchResult: undefined;
};

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#371A61',
      },
      headerTitle: 'Movie App',
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="CategorySearchResult" component={CategorySearchResult} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;

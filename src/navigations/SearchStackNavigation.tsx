import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../screens/Search';
import CategorySearchResult from '../screens/CategorySearchResult';

type SearchStackParamList = {
  SearchLayout: undefined;
  CategorySearchResult: undefined;
};

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#170C34',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: 'Search Movies',
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="SearchLayout" component={Search} />
      <Stack.Screen name="CategorySearchResult" component={CategorySearchResult} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigation;

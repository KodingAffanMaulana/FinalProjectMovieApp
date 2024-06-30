import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import HomeStackNavigation from './HomeStackNavigation'
import SearchStackNavigation from './SearchStackNavigation'
import Favorite from '../screens/Favorite'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#371A61',
      },
      tabBarActiveTintColor: '#fff',
    }}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
)

export default BottomTabNavigator
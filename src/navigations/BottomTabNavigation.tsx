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
        backgroundColor: '#170C34',
      },
      tabBarActiveTintColor: '#fff',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={20} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={20} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={20} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
)

export default BottomTabNavigator
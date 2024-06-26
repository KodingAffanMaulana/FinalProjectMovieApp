import React from 'react'
import { View, Text } from 'react-native'
import MovieDetail from './MovieDetail'

export default function Home(): JSX.Element {
  return (
    <View>
      <Text>Home</Text>
      <MovieDetail />
    </View>
  )
}
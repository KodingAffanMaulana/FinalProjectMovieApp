import React, { useState } from 'react'
import { View, StatusBar, Text, TouchableOpacity, StyleSheet } from 'react-native'
import KeywordSearch from '../components/search/KeywordSearch'
import CategorySearch from '../components/search/CategorySearch'

export default function Search(): JSX.Element {
  const [selectedBar, setSelectedBar] = useState<string>('keyword')

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topBarContainer}>
          {['keyword', 'category'].map((item: string, index: number) => (
            <TouchableOpacity
              key={item}
              activeOpacity={0.9}
              style={{
                ...styles.topBar,
                backgroundColor: item === selectedBar ? '#782e6c' : 'white',
                borderTopLeftRadius: index === 0 ? 10 : 0,
                borderBottomLeftRadius: index === 0 ? 10 : 0,
                borderTopRightRadius: index === 1 ? 10 : 0,
                borderBottomRightRadius: index === 1 ? 10 : 0,
              }}
              onPress={() => {
                setSelectedBar(item)
              }}
            >
              <Text style={{ color: item === selectedBar ? 'white' : '#782e6c', fontSize: 16, fontWeight: 500, textTransform: 'capitalize' }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {selectedBar === 'keyword' ? <KeywordSearch /> : <CategorySearch />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: StatusBar.currentHeight ?? 32,
    padding: 16,
    backgroundColor: '#170C34',
    minHeight: 1200
  },
  topBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  topBar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    paddingVertical: 12
  },
  topBarLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
})
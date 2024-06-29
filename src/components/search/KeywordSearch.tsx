import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { API_ACCESS_TOKEN } from '@env';
import type { Movie } from '../../types/app';

export default function KeywordSearch(): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [detailedMovies, setDetailedMovies] = useState<Record<number, Movie>>({});

  const handleEndEditing = async () => {
    const url = `https://api.themoviedb.org/3/search/keyword?query=${searchText}&page=1`;
    console.log('Fetching data from URL:', url);
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Successfully fetched data:', data);
      setMovies(data.results);
      setError(null);
    } catch (err) {
        console.error('Error fetching movies:', err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

  const fetchMovieDetail = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_ACCESS_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      setDetailedMovies((prevDetails) => ({
        ...prevDetails,
        [id]: data,
      }));
    } catch (err) {
      console.error('Error fetching movie details:', err);
    }
  };

  useEffect(() => {
    if (movies.length > 0) {
      movies.forEach((movie) => {
        fetchMovieDetail(movie.id);
      });
      console.log('abcde')
    }
  }, [movies]);

  const renderMovies = () => {
    return movies.map((movie) => (
      <View key={movie.id} style={styles.movieContainer}>
        <Text style={styles.movieText}>
          {detailedMovies[movie.id]?.imdb_id || 'Loading...'}
        </Text>

        
      </View>
    ));
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search keyword"
        value={searchText}
        onChangeText={setSearchText}
        onEndEditing={handleEndEditing}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
      <ScrollView contentContainerStyle={styles.resultContainer}>
        {renderMovies()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 20,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#C0B4D5',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
    marginBottom: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  movieContainer: {
    width: '30%', // Adjust as needed
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#C0B4D5',
    borderRadius: 5,
    padding: 10,
  },
  movieText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});
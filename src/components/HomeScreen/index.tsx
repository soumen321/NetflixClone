import {StyleSheet, Image, View, FlatList, Text, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './styles';
import movie from '../../../assets/data/movie';
import {useNavigation} from '@react-navigation/native';
import {Category, Movie} from '../../models';
import {Storage} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';

interface HomeCategoryProps {
  // category: {
  //   id: string;
  //   title: string;
  //   movies: {
  //     id: string;
  //     poster: string;
  //   }[];
  // };
  category: Category;
}

const HomeCategory = (props: HomeCategoryProps) => {
  const {category} = props;

  const [movies, setMovies] = useState<Movie[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      const result = (await DataStore.query(Movie)).filter(
        movie => movie.categoryMoviesId === category.id,
      );
      //console.log(result);
      setMovies(result);
    };
    fetchMovies();
  }, []);

  const onMoviePress = (movie: Movie) => {
    navigation.navigate('MovieDetailsScreen', {id: movie.id});
  };

  Storage.get('article_sample_ss.png') // for listing ALL files without prefix, pass '' instead
    .then(results => console.log(results));

  return (
    <>
      <View style={{marginTop: 10}}>
        <Text style={style.title}>{category.title}</Text>
        <FlatList
          horizontal
          data={movies}
          renderItem={({item, index}) => (
            <Pressable onPress={() => onMoviePress(item)}>
              <Image
                source={{
                  uri: item.poster,
                }}
                style={style.image}
              />
            </Pressable>
          )}
        />
      </View>
    </>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({});

import {StyleSheet, Image, View, FlatList, Text, Pressable} from 'react-native';
import React from 'react';
import style from './styles';
import movie from '../../../assets/data/movie';
import {useNavigation} from '@react-navigation/native';

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const {category} = props;

  const navigation = useNavigation();

  const onMoviePress = movie => {
    navigation.navigate('MovieDetailsScreen', {id: movie.id});
  };
  return (
    <>
      <View style={{marginTop: 10}}>
        <Text style={style.title}>{category.title}</Text>
        <FlatList
          horizontal
          data={category.movies}
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

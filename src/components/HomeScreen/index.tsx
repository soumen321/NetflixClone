import {StyleSheet, Image, View, FlatList, Text} from 'react-native';
import React from 'react';
import style from './styles';

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
  return (
    <>
      <View style={{marginTop: 10}}>
        <Text style={style.title}>{category.title}</Text>
        <FlatList
          horizontal
          data={category.movies}
          renderItem={({item, index}) => (
            <Image
              source={{
                uri: item.poster,
              }}
              style={style.image}
            />
          )}
        />
      </View>
    </>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({});

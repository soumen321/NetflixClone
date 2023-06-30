import {StyleSheet, Image, View, FlatList, Text} from 'react-native';
import React from 'react';
import style from './styles';
import categories from '../../../assets/data/categories';
import HomeCategory from '../../components/HomeScreen';

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

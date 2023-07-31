import {StyleSheet, Image, View, FlatList, Text} from 'react-native';
import '@azure/core-asynciterator-polyfill';
import {DataStore} from 'aws-amplify';

import React, {useEffect, useState} from 'react';
import style from './styles';
//import categories from '../../../assets/data/categories';
import HomeCategory from '../../components/HomeScreen';

import {Category} from '../../../src/models';

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await DataStore.query(Category);
      console.log(response);
      setCategories(response);
    };
    fetchCategories();
  }, []);
  return (
    <View style={style.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

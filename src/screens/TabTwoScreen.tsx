import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';

const TabTwoScreen = () => {
  const onLogout = () => {
    Auth.signOut();
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>TabTwoScreen</Text>
      <Pressable
        onPress={onLogout}
        style={{
          padding: 10,
          backgroundColor: 'red',
          width: 100,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default TabTwoScreen;

const styles = StyleSheet.create({});

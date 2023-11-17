import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Header} from '../components/HomeComponents/Header';
import {GroupCards} from '../components/HomeComponents/GroupsCards';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <GroupCards />
    </View>
  );
};

const styles = StyleSheet.create({});

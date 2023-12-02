import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Header} from '../components/HomeComponents/Header';
import {GroupCards} from '../components/HomeComponents/GroupsCards';

export const HomeScreen = () => {
  const [filterId, setFilterId] = useState(0);

  const handleId = (id: number) => {
    setFilterId(id);
  };

  return (
    <View style={{flex: 1}}>
      <Header handleId={handleId} />
      <GroupCards mid={filterId} />
    </View>
  );
};

const styles = StyleSheet.create({});

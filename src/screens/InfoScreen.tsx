import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeParamList} from '../navigation/HomeStack';
import {Header} from '../components/GroupInfoComponents/Header';
import {Inforamtion} from '../components/GroupInfoComponents/Information';

import {COLORS} from '../themes/COLORS';

import {Client} from 'pg';


export type Props = NativeStackScreenProps<HomeParamList, 'SInfo'>;

export const InfoScreen: React.FC<Props> = ({navigation, route}) => {
  const obj = route.params.obj;
  return (
    <View style={{flex: 1, backgroundColor: COLORS.DARK_GRAY}}>
      <Header image={obj.image} navigation={navigation} />
      <Inforamtion describe={obj.describe} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

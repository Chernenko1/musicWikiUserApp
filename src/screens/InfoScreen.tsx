import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {HomeParamList} from '../navigation/HomeStack';
import {Header} from '../components/GroupInfoComponents/Header';
import {Inforamtion} from '../components/GroupInfoComponents/Information';

import {COLORS} from '../themes/COLORS';
import {InfoContext} from '../context/InfoContext';

export type Props = NativeStackScreenProps<HomeParamList, 'SInfo'>;

export const InfoScreen: React.FC<Props> = ({navigation, route}) => {
  const id = route.params.id;

  const group = useAppSelector(state => state.groups.groupsData).find(
    item => item.id == id,
  );

  return (
    <InfoContext.Provider value={id}>
      <View style={{flex: 1, backgroundColor: COLORS.DARK_GRAY}}>
        <Header
          image={'http://10.0.2.2:4848/' + group?.['image.image_data']}
          navigation={navigation}
        />
        <Inforamtion data={group} navigation={navigation} />
      </View>
    </InfoContext.Provider>
  );
};

const styles = StyleSheet.create({});

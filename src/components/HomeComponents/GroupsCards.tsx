import React, {useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {GroupCard} from './GroupCard';

import {groups} from '../../data/groups';
import {COLORS} from '../../themes/COLORS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../../navigation/HomeStack';
import {fetchGroups} from '../../http/groupAPI';
import axios from 'axios';

export type Props = NativeStackScreenProps<HomeParamList, 'SHome'>;

export const GroupCards: React.FC<Props> = ({}) => {
  const navigation = useNavigation();

  const fetchA = async () => {
    const res = await fetch('http://10.0.2.2:4848/');
    const dta = await res.json();
    return dta;
  };

  useEffect(() => {
    fetchGroups()
      .then(data => console.log(data))
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(_, ind) => `${ind}`}
        renderItem={({item}) => (
          <TouchableRipple
            onPress={() => {
              navigation.navigate('SInfo', {obj: item});
            }}
            borderless
            rippleColor="gray"
            style={{marginBottom: 20, marginTop: 2}}>
            <GroupCard
              image={item.image}
              title={item.name}
              style={item.music_style}
            />
          </TouchableRipple>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 15,
  },
});

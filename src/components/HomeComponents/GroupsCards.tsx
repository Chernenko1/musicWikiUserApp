import React from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {GroupCard} from './GroupCard';

import {groups} from '../../data/groups';
import {COLORS} from '../../themes/COLORS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../../navigation/HomeStack';

export type Props = NativeStackScreenProps<HomeParamList, 'SHome'>;

export const GroupCards: React.FC<Props> = ({}) => {
  const navigation = useNavigation();

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

import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Animated} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../themes/COLORS';
import {ShortDescription} from './ShortDescription';
import {Description} from './Description';
import {SongPrev} from './SongPrev';
import {AwardPrev} from './AwardPrev';

interface Props {
  data: Group;
  navigation: any;
}

export const Inforamtion: React.FC<Props> = ({data, navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <>
          <View>
            <Text style={styles.title_text}>{data.group_name}</Text>
          </View>
          <ShortDescription year={data.creation_year} />
        </>
        <Description describe={data.description} />
        <SongPrev />
        <AwardPrev />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingHorizontal: 15,
    backgroundColor: COLORS.DARK_GRAY,
  },
  title_text: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 48,
  },
});

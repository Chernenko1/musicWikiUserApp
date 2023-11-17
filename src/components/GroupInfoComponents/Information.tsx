import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Animated} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../themes/COLORS';
import {ShortDescription} from './ShortDescription';
import {Description} from './Description';

interface Props {
  describe: string;
  navigation: any;
}

export const Inforamtion: React.FC<Props> = ({describe, navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <>
          <View>
            <Text style={styles.title_text}>Title</Text>
          </View>
          <ShortDescription />
        </>
        <Description describe={describe} />
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

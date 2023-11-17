import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {COLORS} from '../../themes/COLORS';

export const ShortDescription = () => {
  return (
    <>
      <View style={styles.containert}>
        <View style={styles.description}>
          <Text style={styles.description_header_text}>1111</Text>
          <Text style={styles.description_text}>год основания</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.description_header_text}>5</Text>
          <Text style={styles.description_text}>кол. уч.</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.description_header_text}>15</Text>
          <Text style={styles.description_text}>some text</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containert: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10,
  },
  description: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  description_header_text: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 24,
  },
  description_text: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 18,
  },
});

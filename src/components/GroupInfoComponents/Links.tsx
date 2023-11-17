import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../themes/COLORS';

export const Links = () => {
  return (
    <View style={styles.container}>
      <Icon
        name="star"
        size={24}
        color={COLORS.TEXT_GRAY_COLOR}
        style={styles.icon}
      />
      <Icon
        name="share-social"
        size={24}
        color={COLORS.TEXT_GRAY_COLOR}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
  },
  icon: {
    backgroundColor: COLORS.CARD_BACKGROUND,
    textAlign: 'center',
    padding: 12,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.GRAY,
  },
});

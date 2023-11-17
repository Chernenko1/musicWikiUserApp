import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../themes/COLORS';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search_container}>
        <Icon name="search-outline" size={30} color={COLORS.TEXT_GRAY_COLOR} />
        <Icon name="menu-outline" size={30} color={COLORS.TEXT_GRAY_COLOR} />
      </View>
      <View style={styles.title}>
        <Text style={styles.title_text}>GROUPS</Text>
      </View>
      <View style={styles.top_nav}>
        <TouchableRipple>
          <Text style={styles.nav_text}>ALL</Text>
        </TouchableRipple>
        <TouchableRipple>
          <Text style={{...styles.nav_text, borderWidth: 0, color: 'gray'}}>
            ROCK
          </Text>
        </TouchableRipple>
        <TouchableRipple>
          <Text style={{...styles.nav_text, borderWidth: 0, color: 'gray'}}>
            METALL
          </Text>
        </TouchableRipple>
        <TouchableRipple>
          <Text style={{...styles.nav_text, borderWidth: 0, color: 'gray'}}>
            R&B
          </Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_GRAY,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 24,
  },
  search_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top_nav: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    columnGap: 10,
  },
  nav_text: {
    color: COLORS.TEXT_GRAY_COLOR,
    textAlign: 'center',
    fontSize: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  title: {},
  title_text: {
    fontSize: 48,
    color: COLORS.TEXT_GRAY_COLOR,
  },
});

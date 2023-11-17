import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../themes/COLORS';
import {Links} from './Links';

interface Props {
  image: string;
  navigation: any;
}

export const Header: React.FC<Props> = ({image, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Icon
          name="arrow-back-outline"
          size={30}
          color={COLORS.TEXT_GRAY_COLOR}
          onPress={() => navigation.goBack()}
        />
        <Icon name="menu-outline" size={30} color={COLORS.TEXT_GRAY_COLOR} />
      </View>
      <View>
        <Image source={{uri: `${image}`}} style={styles.image} />
      </View>
      <View style={styles.links}>
        <Links />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.BLACK,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 250,
    marginBottom: 50,
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 180,
    height: 180,
    position: 'absolute',
    left: -20,
  },
  links: {
    alignItems: 'flex-end',
    top: 20,
    right: 5,
  },
});

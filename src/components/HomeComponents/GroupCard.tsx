import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {COLORS} from '../../themes/COLORS';

interface Props {
  image: string;
  title: string;
  style: string;
}

export const GroupCard: React.FC<Props> = ({image, title, style}) => {
  // console.log(style);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.title_style}>
          <Text style={{color: COLORS.GRAY, fontSize: 15}}>
            {style.toUpperCase()}
          </Text>
        </View>
        <View style={styles.title}>
          <View style={styles.stick} />
          <Text style={{fontSize: 30, color: COLORS.TEXT_GRAY_COLOR}}>
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.image_container}>
        <Image source={{uri: `${image}`}} width={150} height={150} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderRadius: 10,
    backgroundColor: COLORS.CARD_BACKGROUND,
  },
  stick: {
    backgroundColor: COLORS.GRAY,
    width: 20,
    height: 3,
    borderRadius: 10,
    paddingHorizontal: 0,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },

  title_style: {
    left: 25,
    marginTop: 5,

    padding: 2,
  },
  image_container: {
    marginTop: 30,
    bottom: 5,
  },
});

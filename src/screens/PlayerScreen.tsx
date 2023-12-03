import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../navigation/HomeStack';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../themes/COLORS';

export type Props = NativeStackScreenProps<HomeParamList, 'Player'>;

export const Player = ({navigation, route}: Props) => {
  const info = route.params.info;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-down-outline"
          size={24}
          color={COLORS.TEXT_GRAY_COLOR}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.soundImage}>
        <Image
          source={{
            uri: 'https://www.pngarts.com/files/4/Vinyl-PNG-Free-Download.png',
          }}
          width={250}
          height={250}
          style={styles.sImage}
        />
      </View>
      <View style={styles.soundInfo}>
        <Text style={[styles.text, {fontSize: 18}]}>{info.song_name}</Text>
        <Text style={styles.text}>{info['group.group_name']}</Text>
      </View>
      <View style={styles.soundControl}>
        <Icon
          name="heart-outline"
          color={COLORS.TEXT_GRAY_COLOR}
          size={30}
          style={{transform: [{scaleX: -1}]}}
        />
        {/* <View style={styles.controlButtons}> */}
        <Icon
          name="refresh-circle-outline"
          color={COLORS.TEXT_GRAY_COLOR}
          size={60}
          style={{transform: [{scaleX: -1}]}}
        />
        <Icon
          name="play-circle-outline"
          color={COLORS.TEXT_GRAY_COLOR}
          size={70}
        />
        <Icon
          name="refresh-circle-outline"
          color={COLORS.TEXT_GRAY_COLOR}
          size={60}
        />
        <Icon
          name="ellipsis-vertical-outline"
          color={COLORS.TEXT_GRAY_COLOR}
          size={30}
        />
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_GRAY,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {},
  soundImage: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sImage: {
    backgroundColor: 'rgba(238, 238, 238, 0.03)',
    borderRadius: 15,
  },
  soundInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.TEXT_GRAY_COLOR,
  },
  soundControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  controlButtons: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
});

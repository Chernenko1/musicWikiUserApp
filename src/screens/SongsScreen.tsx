import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {HomeParamList} from '../navigation/HomeStack';
import {COLORS} from '../themes/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import {playSound} from '../utils/playSound';

export type Props = NativeStackScreenProps<HomeParamList, 'SSong'>;

export const SongScreen = ({navigation, route}: Props) => {
  const songs = route.params.songs;

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.top_container}>
          <Icon
            name="arrow-back-outline"
            size={30}
            color={COLORS.TEXT_GRAY_COLOR}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>Песни</Text>
        </View>
        {songs.map((itm, ind) => (
          <TouchableOpacity
            key={itm.id + 'sg'}
            onPress={() => navigation.push('Player', {info: itm})}>
            <View style={styles.content}>
              <View style={styles.imageCont}>
                <Image
                  source={{
                    uri: 'https://www.pngarts.com/files/4/Vinyl-PNG-Free-Download.png',
                  }}
                  width={50}
                  height={50}
                />
              </View>
              <View style={styles.songInfo}>
                <Text style={styles.titleText}>{itm.song_name}</Text>
                <Text style={[styles.titleText, {fontSize: 14}]}>
                  {itm['group.group_name']}
                </Text>
              </View>
              <TouchableOpacity onPress={() => playSound(itm.songfile)}>
                <View>
                  <Icon
                    name="play-outline"
                    color={COLORS.TEXT_GRAY_COLOR}
                    size={24}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  container: {
    backgroundColor: COLORS.DARK_GRAY,
    flex: 1,
    paddingHorizontal: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(238, 238, 238, 0.03)',
    borderRadius: 12,
  },
  songInfo: {
    rowGap: 2,
    justifyContent: 'space-between',
    flexBasis: '65%',
  },
  imageCont: {
    backgroundColor: 'rgba(238, 238, 238, 0.1)',
    padding: 5,
    borderRadius: 12,
  },
  titleText: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 16,
  },
  headerText: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 24,
    left: 125,
    fontWeight: 700,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
});

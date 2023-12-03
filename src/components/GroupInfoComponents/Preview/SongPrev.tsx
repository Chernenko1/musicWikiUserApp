import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../../themes/COLORS';
import {InfoContext} from '../../../context/InfoContext';
import {fetchSongs} from '../../../http/songAPI';
import {playSound} from '../../../utils/playSound';

export const SongPrev = () => {
  const [hideText, setHideText] = useState<boolean>(false);
  const [songs, setSongs] = useState<Song[]>([]);

  const navigation = useNavigation();

  const id = useContext(InfoContext);

  useEffect(() => {
    fetchSongs(id).then((data: any) => setSongs(data.data));
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, {fontSize: 25, fontWeight: '700'}]}>
          Песни
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push('SSong', {songs})}
          activeOpacity={0.7}>
          <View style={{flexDirection: 'row', columnGap: 2}}>
            <Text style={[styles.headerText, {fontSize: 17}]}>Всё</Text>
            <Icon
              name="chevron-forward-outline"
              style={{color: COLORS.TEXT_GRAY_COLOR, top: 4}}
              size={18}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        {songs.map(
          (itm, ind) =>
            ind < 2 && (
              <View key={itm.id + 'sg'} style={styles.content}>
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
            ),
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
});

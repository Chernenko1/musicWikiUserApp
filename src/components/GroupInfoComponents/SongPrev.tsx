import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchSongs} from '../../http/songAPI';

import {COLORS} from '../../themes/COLORS';
import {InfoContext} from '../../context/InfoContext';

export const SongPrev = () => {
  const [hideText, setHideText] = useState<boolean>(false);
  const [songs, setSongs] = useState<Song[]>([]);

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
        <View style={{flexDirection: 'row', columnGap: 2}}>
          <Text style={[styles.headerText, {fontSize: 17}]}>Всё</Text>
          <Icon
            name="chevron-forward-outline"
            style={{color: COLORS.TEXT_GRAY_COLOR, top: 4}}
            size={18}
          />
        </View>
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
                <View>
                  <Text style={{color: COLORS.TEXT_GRAY_COLOR}}>0:00</Text>
                </View>
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

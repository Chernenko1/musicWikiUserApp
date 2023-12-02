import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import {COLORS} from '../../themes/COLORS';
import {fetchAlbums} from '../../http/albumAPI';
import {fetchBandMembers} from '../../http/bandMembers';
import {InfoContext} from '../../context/InfoContext';

interface Props {
  year: number;
}

export const ShortDescription: React.FC<Props> = ({year}) => {
  const id = useContext(InfoContext);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [members, setMembers] = useState<BandMember[]>([]);

  useEffect(() => {
    fetchAlbums(id).then((data: any) => setAlbums(data.album));
    fetchBandMembers(id).then((data: any) => setMembers(data.bandMember));
  }, []);

  return (
    <>
      <View style={styles.containert}>
        <View style={styles.description}>
          <Text style={styles.description_header_text}>{year}</Text>
          <Text style={styles.description_text}>основание</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.description_header_text}>{members.length}</Text>
          <Text style={styles.description_text}>кол. уч.</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.description_header_text}>{albums.length}</Text>
          <Text style={styles.description_text}>выпущ. альбомов</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containert: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
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

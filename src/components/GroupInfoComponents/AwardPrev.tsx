import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../themes/COLORS';
import {InfoContext} from '../../context/InfoContext';
import {fetchAwards} from '../../http/awardsAPI';

export const AwardPrev = () => {
  const [award, setAward] = useState<Award[]>([]);

  const id = useContext(InfoContext);

  useEffect(() => {
    fetchAwards(id).then((data: any) => setAward(data.data));
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, {fontSize: 25, fontWeight: '700'}]}>
          Награды
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
        {award.map(
          (itm, ind) =>
            ind < 2 && (
              <View key={itm.id + 'sg'} style={styles.content}>
                <View style={styles.imageCont}>
                  <Image
                    source={{
                      uri: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Queen-2048x1280.png',
                    }}
                    width={50}
                    height={50}
                  />
                </View>
                <View style={styles.songInfo}>
                  <Text style={styles.titleText}>{itm.award_name}</Text>
                  <Text style={[styles.titleText, {fontSize: 14}]}>
                    {itm.date}
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

import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../themes/COLORS';
import {InfoContext} from '../../../context/InfoContext';
import {fetchAwards} from '../../../http/awardsAPI';

export const AwardPrev = () => {
  const [award, setAward] = useState<Award[]>([]);

  const id = useContext(InfoContext);
  const navigation = useNavigation();

  useEffect(() => {
    fetchAwards(id).then((data: any) => setAward(data.data));
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, {fontSize: 25, fontWeight: '700'}]}>
          Награды
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push('SAward', {award})}
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
                <View style={styles.Info}>
                  <Text style={styles.titleText}>{itm.award_name}</Text>
                  <Text style={[styles.titleText, {fontSize: 14}]}>
                    {itm.date.slice(0, 10)}
                  </Text>
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
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(238, 238, 238, 0.03)',
    borderRadius: 12,
    padding: 10,
  },
  Info: {
    rowGap: 2,
    flexWrap: 'wrap',
  },
  imageCont: {
    backgroundColor: 'rgba(238, 238, 238, 0.1)',
    padding: 5,
    borderRadius: 12,
  },
  titleText: {
    color: COLORS.TEXT_GRAY_COLOR,
    maxWidth: '90%',
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

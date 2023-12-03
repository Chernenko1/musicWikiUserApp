import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {HomeParamList} from '../navigation/HomeStack';
import {COLORS} from '../themes/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';

export type Props = NativeStackScreenProps<HomeParamList, 'SPR'>;

export const PRScreen = ({navigation, route}: Props) => {
  const [active, setActive] = useState(0);
  const pressR = route.params.pressR;

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
          <Text style={styles.headerText}>Пресс-релизы</Text>
        </View>
        {pressR.map((itm, ind) => (
          <View style={{marginBottom: 10}}>
            <TouchableOpacity
              onPress={() => {
                active == 0 ? setActive(itm.id) : setActive(0);
              }}
              activeOpacity={0.7}
              key={itm.id + 'sg_'}>
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
                  <Text style={styles.titleText}>{itm.headline}</Text>
                  <Text style={[styles.titleText, {fontSize: 14}]}>
                    {itm.public_date.slice(0, 10)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={[
                styles.contentText,
                {display: active == itm.id ? 'flex' : 'none'},
              ]}>
              <Text style={[styles.titleText]}>{itm.text}</Text>
            </View>
          </View>
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
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,

    backgroundColor: 'rgba(238, 238, 238, 0.08)',
    borderRadius: 12,
    padding: 10,
  },
  contentText: {
    flexDirection: 'row',
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
    fontSize: 16,
  },
  headerText: {
    color: COLORS.TEXT_GRAY_COLOR,
    left: 100,
    fontWeight: '700',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
});

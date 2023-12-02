import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setMusicStyle} from '../../redux/slices/groupSlice';

import {COLORS} from '../../themes/COLORS';
import {fetchMusicS} from '../../http/musicStyleAPI';

interface Props {
  handleId: any;
}

export const Header = ({handleId}: Props) => {
  const [isActive, setActive] = useState(0);

  const dispatch = useAppDispatch();

  const mStyles = useAppSelector(state => state.groups.musicStyleData);

  useEffect(() => {
    fetchMusicS()
      .then(data => dispatch(setMusicStyle(data.musicStyle)))
      .catch(e => console.log(e));
  }, []);

  const setId = (id: number) => {
    handleId(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search_container}>
        <Icon name="search-outline" size={30} color={COLORS.TEXT_GRAY_COLOR} />
        <Icon name="menu-outline" size={30} color={COLORS.TEXT_GRAY_COLOR} />
      </View>
      <View style={styles.title}>
        <Text style={styles.title_text}>GROUPS</Text>
      </View>
      <View style={styles.top_nav}>
        <TouchableRipple
          onPress={() => {
            setId(0), setActive(0);
          }}>
          <Text
            style={
              isActive == 0
                ? {
                    ...styles.nav_text,
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 2,
                    color: COLORS.TEXT_GRAY_COLOR,
                  }
                : styles.nav_text
            }>
            ALL
          </Text>
        </TouchableRipple>
        <FlatList
          data={mStyles}
          keyExtractor={item => item.id + 'ms'}
          renderItem={({item}) => (
            <TouchableRipple
              key={item.id + 'ms'}
              onPress={() => {
                setId(item.id), setActive(item.id);
              }}>
              <Text
                style={
                  isActive == item.id
                    ? {
                        ...styles.nav_text,
                        borderRadius: 20,
                        borderColor: 'white',
                        borderWidth: 2,
                        color: COLORS.TEXT_GRAY_COLOR,
                      }
                    : styles.nav_text
                }>
                {item.style_name.toLocaleUpperCase()}
              </Text>
            </TouchableRipple>
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_GRAY,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.TEXT_GRAY_COLOR,
    fontSize: 24,
  },
  search_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top_nav: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    columnGap: 10,
  },
  nav_text: {
    // color: COLORS.TEXT_GRAY_COLOR,
    textAlign: 'center',
    fontSize: 12,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 0,
    color: 'gray',
  },
  title: {},
  title_text: {
    fontSize: 48,
    color: COLORS.TEXT_GRAY_COLOR,
  },
});

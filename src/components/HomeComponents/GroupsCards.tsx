import React, {useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {GroupCard} from './GroupCard';
import {COLORS} from '../../themes/COLORS';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../../navigation/HomeStack';
import {fetchGroups} from '../../http/groupAPI';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setGroups} from '../../redux/slices/groupSlice';

export type Prop = NativeStackScreenProps<HomeParamList, 'SHome'>;

interface Props {
  mid: number;
}

export const GroupCards = ({mid = 0}: Props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchGroups()
      .then(data => dispatch(setGroups(data.groups.rows)))
      .catch(e => console.log(e));
  }, []);

  let groups = useAppSelector(state => state.groups.groupsData);

  if (mid !== 0) {
    groups = groups.filter(itm => itm.music_style_id == mid);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(_, ind) => `${ind}`}
        renderItem={({item}) => (
          <TouchableRipple
            onPress={() => {
              navigation.navigate('SInfo', {obj: item});
            }}
            borderless
            rippleColor="gray"
            style={{marginBottom: 20, marginTop: 2}}>
            <GroupCard
              image={
                'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Queen-2048x1280.png'
              }
              title={item.group_name}
              style={item['music_style.style_name']}
            />
          </TouchableRipple>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 15,
  },
});

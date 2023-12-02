import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useAppSelector} from '../redux/hooks';
import {HomeParamList} from '../navigation/HomeStack';
import {Header} from '../components/GroupInfoComponents/Header';
import {Inforamtion} from '../components/GroupInfoComponents/Information';

import {COLORS} from '../themes/COLORS';
import {fetchConcerts} from '../http/concertAPI';
import {fetchPrs} from '../http/prAPI';
import {fetchAwards} from '../http/awardsAPI';
import {InfoContext} from '../context/InfoContext';

export type Props = NativeStackScreenProps<HomeParamList, 'SInfo'>;

export const InfoScreen: React.FC<Props> = ({navigation, route}) => {
  const id = route.params.id;

  const group = useAppSelector(state => state.groups.groupsData).find(
    item => item.id == id,
  );

  const [conserts, setConcerts] = useState<Concert[]>([]);
  const [pressR, setPressR] = useState<PR[]>([]);

  useEffect(() => {
    fetchConcerts(id).then((data: any) => setConcerts(data));

    fetchPrs(id).then((data: any) => setPressR(data.data));
    fetchAwards(id).then((data: any) => setAward(data.data));
  }, []);

  return (
    <InfoContext.Provider value={id}>
      <View style={{flex: 1, backgroundColor: COLORS.DARK_GRAY}}>
        <Header
          image={
            'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Queen-2048x1280.png'
          }
          navigation={navigation}
        />
        <Inforamtion data={group} navigation={navigation} />
      </View>
    </InfoContext.Provider>
  );
};

const styles = StyleSheet.create({});

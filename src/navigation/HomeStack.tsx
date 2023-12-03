import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {GROUPS} from '../data/groups';
import {SongScreen} from '../screens/SongsScreen';
import {AwardsScreen} from '../screens/AwardsScreen';
import {PRScreen} from '../screens/PressReleasesScreen';
import {ConcertsScreen} from '../screens/ConcertsScreen';
import {Player} from '../screens/PlayerScreen';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: false,
};

export type HomeParamList = {
  SHome: undefined;
  SInfo: {
    id: number;
  };
  SSong: {
    songs: Song[];
  };
  SAward: {
    award: Award[];
  };
  SPR: {
    pressR: PR[];
  };
  SConcerts: {
    concerts: Concert[];
  };
  Player: {
    info: Song;
  };
};

const Stack = createNativeStackNavigator<HomeParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen name="SHome" component={HomeScreen} />
      <Stack.Screen name="SInfo" component={InfoScreen} />
      <Stack.Screen name="SSong" component={SongScreen} />
      <Stack.Screen name="SAward" component={AwardsScreen} />
      <Stack.Screen name="SPR" component={PRScreen} />
      <Stack.Screen name="SConcerts" component={ConcertsScreen} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
};

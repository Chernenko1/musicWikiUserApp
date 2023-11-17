import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {InfoScreen} from '../screens/InfoScreen';
import {GROUPS} from '../data/groups';

const nativeStackOption: NativeStackNavigationOptions = {
  headerShown: false,
};

export type HomeParamList = {
  SHome: undefined;
  SInfo: {
    obj: GROUPS;
  };
};

const Stack = createNativeStackNavigator<HomeParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={nativeStackOption}>
      <Stack.Screen name="SHome" component={HomeScreen} />
      <Stack.Screen name="SInfo" component={InfoScreen} />
    </Stack.Navigator>
  );
};

import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HomeStack} from './HomeStack';

export const AppNavigator = () => {
  return <HomeStack />;
};

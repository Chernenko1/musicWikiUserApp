import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {fetchGroups} from './src/http/groupAPI';
import {useAppDispatch} from './src/redux/hooks';
import {setGroups} from './src/redux/slices/groupSlice';

export const App = () => {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

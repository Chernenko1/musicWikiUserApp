import {combineReducers, configureStore} from '@reduxjs/toolkit';
import groupReducer from './slices/groupSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const groupPersistConfig = {
  key: 'groups',
  storage: AsyncStorage,
  // whitelist: ['groupsData'],
};

const groupsPersistReducer = persistReducer(groupPersistConfig, groupReducer);

const reducers = combineReducers({
  groups: groupsPersistReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

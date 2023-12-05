import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import groupReducer from './slices/groupSlice';
import favouriteReducer from './slices/favouriteSlice';

const groupPersistConfig = {
  key: 'groups',
  storage: AsyncStorage,
  // whitelist: ['groupsData'],
};

const favouritePersistConfig = {
  key: 'favourite',
  storage: AsyncStorage,
};

const groupsPersistReducer = persistReducer(groupPersistConfig, groupReducer);
const favouritePersistReducer = persistReducer(
  favouritePersistConfig,
  favouriteReducer,
);

const reducers = combineReducers({
  groups: groupsPersistReducer,
  fav: favouritePersistReducer,
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

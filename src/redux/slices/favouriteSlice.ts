import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface Favourite {
  group: number[];
}

const initialState: Favourite = {
  group: [],
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group.push(action.payload);
    },
    deletGroup: (state, action) => {
      state.group = state.group.filter(itm => itm != action.payload);
    },
  },
});

export const {setGroup, deletGroup} = favouriteSlice.actions;

export const selectFavourite = (state: RootState) => state.fav;

export default favouriteSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

import {ReducerNameSpace} from '../../constants/reducer.constants';
import {Game} from '../../types/game.type';
import {fetchGameData, fetchGamesData} from '../api-actions';

type AppData = {
  games: Game[];
  game: Game[];
};

const initialState: AppData = {
  games: [],
  game: []
};

export const appData = createSlice({
  name: ReducerNameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGamesData.fulfilled, (state, action) => {
        state.games = action.payload;
      })
      .addCase(fetchGameData.fulfilled, (state, action) => {
        state.game = action.payload;
      });
  }
});

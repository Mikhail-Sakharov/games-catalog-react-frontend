import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';

import {AppDispatch, State} from '../types/state';
import {Game} from '../types/game.type';
import {QueryArguments} from '../types/query.type';
import {APIRoute, BASE_URL} from '../constants/api.constants';
import {getQueryString} from '../helpers/get-query-string';

export const fetchGamesData = createAsyncThunk<Game[], QueryArguments | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGames',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Game[]>(`${BASE_URL}${APIRoute.Games}${_arg ? getQueryString(_arg) : ''}`);
    return data;
  },
);

export const fetchGameData = createAsyncThunk<Game[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchGame',
  async (slug, {dispatch, extra: api}) => {
    const {data} = await api.get<Game[]>(`${BASE_URL}${APIRoute.Game}/${slug}`);
    return data;
  },
);

import {combineReducers} from '@reduxjs/toolkit';

import {ReducerNameSpace} from '../constants/reducer.constants';
import {appData} from './app-data/app-data';

export const rootReducer = combineReducers({
  [ReducerNameSpace.AppData]: appData.reducer
});

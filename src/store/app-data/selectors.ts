import {ReducerNameSpace} from '../../constants/reducer.constants';
import {Game} from '../../types/game.type';
import {State} from '../../types/state';

export const getGames = (state: State): Game[] => state[ReducerNameSpace.AppData].games;

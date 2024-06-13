import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {getGames} from '../../store/app-data/selectors';
import GameCard from '../game-card/game-card';

import style from './style.module.scss';
import {fetchGamesData} from '../../store/api-actions';
import {SortOrder, SortType} from '../../types/query.type';

type CatalogProps = {
  sort?: SortType;
  order?: SortOrder;
};

function Catalog({sort, order}: CatalogProps): JSX.Element {
  const dispatch = useAppDispatch();
  const games = useAppSelector(getGames);

  useEffect(() => {
    dispatch(fetchGamesData({
      sort,
      order
    }));
  }, [dispatch, order, sort]);

  return (
    <div className={style.wrapper}>
      {
        games.map((game) => (
          <div key={game.id} className={style['card-wrapper']}>
            <GameCard game={game} />
          </div>
        ))
      }
    </div>
  );
}

export default Catalog;

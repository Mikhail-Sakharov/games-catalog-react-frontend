import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchGameData} from '../../store/api-actions';
import {getGame} from '../../store/app-data/selectors';
import {BASE_URL} from '../../constants/api.constants';

import style from './style.module.scss';

function GamePage(): JSX.Element {
  const dispatch = useAppDispatch();

  const gameSlug = useParams().slug;

  const game = useAppSelector(getGame)[0];

  useEffect(() => {
    if (gameSlug) {
      dispatch(fetchGameData(gameSlug));
    }
  }, [dispatch, gameSlug]);

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style['image-wrapper']}>
          <img
            className={style.image}
            src={`${BASE_URL}${game?.poster}`} alt="poster"
          />
        </div>
        <div className={style['info-wrapper']}>
          <p className={style.released}>
            <span className={style.label}>Дата релиза: </span>
            <span className={style.date}>{game?.released}</span>
          </p>
          <div className={style.rating}>
            <span className={style['rating-label']}>rating</span>
            <span className={style.value}>
              {game?.rating}
            </span>
          </div>
        </div>
      </div>
      <p className={style.name}>{game?.name}</p>
      <p className={style.description}>{game?.description}</p>
    </div>
  );
}

export default GamePage;

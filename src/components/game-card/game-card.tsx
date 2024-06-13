import {BASE_URL} from '../../constants/api.constants';

import style from './style.module.scss';

type Game = {
  id: number;
  slug: string;
  name: string;
  description: string;
  released: string;
  poster: string;
  rating: number;
};

type GameCardProps = {
  game: Game;
};

function GameCard({
  game: {id, slug, name, description, released, poster, rating}
}: GameCardProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.poster}>
        <img src={`${BASE_URL}${poster}`}
          alt="poster"
          className={style.image}
        />
      </div>
      <div className={style.description}>
        <div className={style.name}>
          <span className={style.text}>
            {name}
          </span>
        </div>
        <div className={style.rating}>
          <span className={style['rating-label']}>rating</span>
          <span className={style.value}>
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GameCard;

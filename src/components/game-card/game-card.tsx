import {useNavigate} from 'react-router-dom';

import {BASE_URL} from '../../constants/api.constants';
import {Game} from '../../types/game.type';

import style from './style.module.scss';

type GameCardProps = {
  game: Game;
};

function GameCard({
  game: {id, slug, name, description, released, poster, rating}
}: GameCardProps): JSX.Element {
  const navigate = useNavigate();

  const handleGameCardClick = () => {
    navigate(`/game/${slug}`);
  };

  return (
    <div
      onClick={handleGameCardClick}
      className={style.wrapper}
    >
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

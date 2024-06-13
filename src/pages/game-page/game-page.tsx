import {useParams} from 'react-router-dom';

import style from './style.module.scss';

function GamePage(): JSX.Element {
  const gameSlug = useParams().slug;

  return (
    <div className={style.wrapper}>
      <h1>Work In Progress</h1>
    </div>
  );
}

export default GamePage;

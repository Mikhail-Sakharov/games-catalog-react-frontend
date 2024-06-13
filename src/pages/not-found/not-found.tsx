import style from './style.module.scss';

function NotFound(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>404 Not Found</h1>
    </div>
  );
}

export default NotFound;

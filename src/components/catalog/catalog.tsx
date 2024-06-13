import GameCard from '../game-card/game-card';

import style from './style.module.scss';

function Catalog(): JSX.Element {
  const games = [
    {
      id: 1,
      slug: 'gta-5',
      name: 'Grand Theft Auto 5',
      description: 'This is the best game ever!',
      released: '2013-09-18',
      poster: '/posters/gta-5.jpg',
      rating: 95,
    },
    {
      id: 2,
      slug: 'CS:GO',
      name: 'Counter Strike: Global Offensive',
      description: 'This is the best game ever!',
      released: '2013-09-17',
      poster: '/posters/csgo.jpg',
      rating: 91,
    },
    {
      id: 3,
      slug: 'witcher3',
      name: 'The Witcher 3: Wild Hunt',
      description: 'This is the best game ever!',
      released: '2013-09-20',
      poster: '/posters/witcher3.jpg',
      rating: 88,
    },
    {
      id: 4,
      slug: 'HL2',
      name: 'Half Life 2',
      description: 'This is the best game ever!',
      released: '2013-09-2',
      poster: '/posters/HL2.jpg',
      rating: 67,
    },
    {
      id: 5,
      slug: 'doom2016',
      name: 'Doom (2016)',
      description: 'This is the best game ever!',
      released: '2013-09-12',
      poster: '/posters/doom2016.jpg',
      rating: 68,
    },
    {
      id: 6,
      slug: 'gta-5',
      name: 'Grand Theft Auto 5',
      description: 'This is the best game ever!',
      released: '2013-09-18',
      poster: '/posters/gta-5.jpg',
      rating: 95,
    },
    {
      id: 7,
      slug: 'CS:GO',
      name: 'Counter Strike: Global Offensive',
      description: 'This is the best game ever!',
      released: '2013-09-17',
      poster: '/posters/csgo.jpg',
      rating: 91,
    },
    {
      id: 8,
      slug: 'witcher3',
      name: 'The Witcher 3: Wild Hunt',
      description: 'This is the best game ever!',
      released: '2013-09-20',
      poster: '/posters/witcher3.jpg',
      rating: 88,
    },
    {
      id: 9,
      slug: 'HL2',
      name: 'Half Life 2',
      description: 'This is the best game ever!',
      released: '2013-09-2',
      poster: '/posters/HL2.jpg',
      rating: 67,
    },
    {
      id: 10,
      slug: 'doom2016',
      name: 'Doom (2016)',
      description: 'This is the best game ever!',
      released: '2013-09-12',
      poster: '/posters/doom2016.jpg',
      rating: 68,
    }
  ];

  return (
    <div className={style.wrapper}>
      {/* <Sort /> */}
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

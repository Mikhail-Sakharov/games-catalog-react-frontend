import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoute} from '../../constants/app-routing.constants';

import NotFound from '../../pages/not-found/not-found';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import GamePage from '../../pages/game-page/game-page';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Catalog} element={<CatalogPage />}/>
        <Route path={AppRoute.Game} element={<GamePage />}/>
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

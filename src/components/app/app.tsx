import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AppRoute} from '../../constants/app-routing.constants';

import Catalog from '../catalog/catalog';
import NotFound from '../../pages/not-found/not-found';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Catalog} element={<Catalog />}/>
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

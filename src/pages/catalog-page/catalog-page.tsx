import {useState} from 'react';

import Catalog from '../../components/catalog/catalog';
import Sort from '../../components/sort/sort';

import style from './style.module.scss';
import {SortOrder, SortType} from '../../types/query.type';

function CatalogPage(): JSX.Element {
  const [sort, setSort] = useState(SortType.Rating);
  const [order, setOrder] = useState(SortOrder.Asc);

  return (
    <div className={style.wrapper}>
      <Sort setSort={setSort} setOrder={setOrder} />
      <Catalog sort={sort} order={order}/>
    </div>
  );
}

export default CatalogPage;

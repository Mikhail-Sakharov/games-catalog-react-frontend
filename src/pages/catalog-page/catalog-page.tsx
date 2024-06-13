import Catalog from '../../components/catalog/catalog';

import style from './style.module.scss';

function CatalogPage(): JSX.Element {
  return (
    <div className={style.wrapper}>
      {/* <Sort /> */}
      <Catalog />
    </div>
  );
}

export default CatalogPage;

import {useState} from 'react';
import clsx from 'clsx';

import {SortOrder, SortType} from '../../types/query.type';

import style from './style.module.scss';

const SORT_PLACEHOLDER = 'sort by';

type SortProps = {
  setSort: (state: SortType) => void;
  setOrder: (fn: (state: SortOrder) => SortOrder) => void;
};

function Sort({setSort, setOrder}: SortProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSortTypeButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleOptionClick = (sortType: string) => {
    setSelectedOption(sortType);
    setIsOpened(false);
  };

  const handleOrderButtonClick = () => {
    if (selectedOption) {
      setIsFlipped(!isFlipped);
      setOrder((prevState: SortOrder) => {
        switch(prevState) {
          case SortOrder.Asc:
            return SortOrder.Desc;
          case SortOrder.Desc:
            return SortOrder.Asc;
        }
      });
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={clsx(style['sort-wrapper'], {
        [style.opened]: isOpened
      })}
      >
        <button
          onClick={handleSortTypeButtonClick}
          className={style['sort-button']}
          type="button"
          aria-label="Выберите одну из опций"
        >
          {
            selectedOption
              ? (
                <span className={style['selected-option']}>{selectedOption}</span>
              )
              : (
                <span className={style.text}>{SORT_PLACEHOLDER}</span>
              )
          }
        </button>
        <ul className={style.list}>
          {
            Object.values(SortType).map((sortType) => (
              <li
                onClick={() => handleOptionClick(sortType)}
                key={sortType}
                className={style.item}
              >
                {sortType}
              </li>
            ))
          }
        </ul>
      </div>
      <div className={clsx(style['order-wrapper'], {
        [style.flipped]: isFlipped
      })}
      >
        <button
          onClick={handleOrderButtonClick}
          className={style['order-button']}
        >
          <svg width="15" height="15" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.7771 8L0.252237 0.5L9.30196 0.5L4.7771 8Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Sort;

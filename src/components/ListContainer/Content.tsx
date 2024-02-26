import { useState } from 'react';

import { ItemType } from './ListContainer.types';
import styles from './Content.module.css';

type ContentProps = {
  items: ItemType[];
  onCheck: (id: ItemType['id']) => void;
  onAddPrice: (id: ItemType['id'], price: ItemType['price']) => void;
};

function Content({ items, onCheck, onAddPrice }: ContentProps) {
  const [prices, setPrices] = useState<{
    [id: ItemType['id']]: ItemType['price'];
  }>(items.reduce((acc, curr) => ({ ...acc, [curr.id]: '' }), {}));

  const handlePriceChange = (id: ItemType['id'], price: ItemType['price']) => {
    setPrices(prevPrices => ({ ...prevPrices, [id]: price }));
  };

  const handleAddPriceClick = (id: ItemType['id']) => {
    onAddPrice(id, prices[id]);
  };

  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <div className={styles.itemGroup}>
            <input
              type='checkbox'
              checked={item.checked}
              onChange={() => onCheck(item.id)}
            />
            <span>{item.name}</span>
            {item.price > 0 && (
              <span className={styles.price}>{item.price} PLN</span>
            )}
          </div>

          {item.checked && (
            <div className={styles.priceContainer}>
              <input
                type='number'
                value={prices[item.id] ?? ''}
                onChange={e => handlePriceChange(item.id, +e.target.value)}
              />
              <button
                className='btn-primary'
                onClick={() => handleAddPriceClick(item.id)}
              >
                Dodaj cenę
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Content;

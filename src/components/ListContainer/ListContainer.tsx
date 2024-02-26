import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import styles from './ListContainer.module.css';
import { ItemType } from './ListContainer.types';
import { useFruits } from '../../hooks/useFruits';

import Header from './Header';
import Content from './Content';

function ListContainer() {
  const fruitsFromCookie: string | undefined = Cookies.get('fruits');
  const initialFruits = fruitsFromCookie ? JSON.parse(fruitsFromCookie) : null;
  const { fruits, isErrorFruits, isLoadingFruits } = useFruits();
  const [items, setItems] = useState<ItemType[]>(initialFruits || []);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);

  useEffect(() => {
    if (fruits) setItems(fruits);
  }, [fruits]);

  const toggleContentVisibility = () => setIsContentVisible(!isContentVisible);

  const toggleCheckAll = (checked: ItemType['checked']) => {
    setItems(items.map(item => ({ ...item, checked })));
  };

  const toggleCheck = (id: ItemType['id']) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const addPrice = (id: ItemType['id'], price: ItemType['price']) => {
    setItems(items.map(item => (item.id === id ? { ...item, price } : item)));
  };

  if (!initialFruits && isLoadingFruits) return <div>Loading fruits...</div>;

  if (isErrorFruits) return <div>Failed to load fruits, please try again.</div>;

  return (
    <section className={styles.listContainer}>
      <Header
        onCheckAll={toggleCheckAll}
        onToggleContent={toggleContentVisibility}
        isContentVisible={isContentVisible}
      />

      {isContentVisible && (
        <Content items={items} onCheck={toggleCheck} onAddPrice={addPrice} />
      )}
    </section>
  );
}

export default ListContainer;

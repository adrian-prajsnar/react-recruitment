import { useState } from "react";

import styles from "./ListContainer.module.css";
import { ItemType } from "./ListContainer.types";

import Header from "./Header";
import Content from "./Content";

function ListContainer() {
  const [items, setItems] = useState<ItemType[]>([
    { id: 0, name: "Jabłka", checked: false, price: 0 },
    { id: 1, name: "Banany", checked: false, price: 0 },
    { id: 2, name: "Pomarańcze", checked: false, price: 0 },
    { id: 3, name: "Wiśnie", checked: false, price: 0 },
    { id: 4, name: "Winogrona", checked: false, price: 0 },
  ]);

  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);

  const toggleContentVisibility = () => setIsContentVisible(!isContentVisible);

  const toggleCheckAll = (checked: ItemType["checked"]) => {
    setItems(items.map((item) => ({ ...item, checked })));
  };

  const toggleCheck = (id: ItemType["id"]) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const addPrice = (id: ItemType["id"], price: ItemType["price"]) => {
    setItems(items.map((item) => (item.id === id ? { ...item, price } : item)));
  };

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

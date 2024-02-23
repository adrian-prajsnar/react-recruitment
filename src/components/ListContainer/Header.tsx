import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import styles from "./Header.module.css";

type HeaderProps = {
  onCheckAll: (checked: boolean) => void;
  onToggleContent: () => void;
  isContentVisible: boolean;
};

function Header({
  onCheckAll,
  onToggleContent,
  isContentVisible,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <input type="checkbox" onChange={(e) => onCheckAll(e.target.checked)} />

      <span>Owoce</span>

      <button className={styles.iconContainer} onClick={onToggleContent}>
        {isContentVisible ? <HiChevronUp /> : <HiChevronDown />}
      </button>
    </header>
  );
}

export default Header;

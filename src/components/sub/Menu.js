// components/Menu.js

import Link from 'next/link';
import styles from '../css/Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles['menu-cont']} id="menu-cont">
        <div id="menu-name"><span>MATHIEU L</span></div>
        <div id="menu-button"><span>MENU</span></div>
      </div>
    </div>

  );
};

export default Menu;


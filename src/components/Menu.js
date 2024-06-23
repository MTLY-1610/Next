// components/Menu.js

import Link from 'next/link';
import styles from './Menu.module.css';;

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div class="menu" id="menu">
        <div id="menu-name"><span>MATHIEU L</span></div>
        <div id="menu-button"><span>MENU</span></div>
      </div>
    </div>

  );
};

export default Menu;


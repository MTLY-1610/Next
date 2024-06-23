// components/Menu.js

import Link from 'next/link';
import styles from '../css/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>

      <div className={styles['hero-cont']} id="top">

        <div className={styles['hero-pitch']}>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident laboriosam blanditiis itaque nostrum
            magnam labore earum, nesciunt modi libero.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Hero;
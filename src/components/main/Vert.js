import styles from '../css/Vert.module.css';
import Menu from "../sub/Menu";
import Hero from "../sub/Hero";

const Vert = () => {
  return (
    <div className={styles.vert}>
      <Menu />
      <Hero />
    </div>

  );
};

export default Vert;

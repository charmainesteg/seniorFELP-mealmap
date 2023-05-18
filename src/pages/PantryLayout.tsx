import { Outlet } from 'react-router-dom';
import { Button } from "react-bootstrap";
import styles from './PantryLayout.module.css';

function PantryLayout() {
  return (
    <article className={styles.pantries}>
      <div className={styles['hero-pantry-div']}>
        <section className={styles["hero-pantry-header"]}>
          <h1 className={styles["pantry-header-text"]}>Find Local Pantries Here</h1>
          <div className={styles["pantry-header-btn-div"]}>
            <Button className={styles["pantry-header-btn"]}>
              Locate a pantry near you
            </Button>
          </div>
        </section>
      </div>
      <Outlet />
    </article>
  );
}

export default PantryLayout;

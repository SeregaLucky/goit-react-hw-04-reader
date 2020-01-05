/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Controls.module.css';

/*
 * COMPONENT
 */
const Controls = ({
  onChangeIdxIncrement,
  onChangeIdxDecrement,
  item,
  allPages,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={onChangeIdxDecrement}
      disabled={item <= 1}
    >
      Назад
    </button>

    <button
      type="button"
      className={styles.button}
      onClick={onChangeIdxIncrement}
      disabled={item >= allPages}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onChangeIdxIncrement: T.func.isRequired,
  onChangeIdxDecrement: T.func.isRequired,
  item: T.number.isRequired,
  allPages: T.number.isRequired,
};

export default Controls;

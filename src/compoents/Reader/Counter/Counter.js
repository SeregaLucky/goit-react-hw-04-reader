/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Counter.module.css';

/*
 * COMPONENT
 */
const Counter = ({ item, allPages }) => (
  <p className={styles.counter}>
    {item}/{allPages}
  </p>
);

Counter.propTypes = {
  item: T.number.isRequired,
  allPages: T.number.isRequired,
};

export default Counter;

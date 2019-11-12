/* import - node_modules */
import React from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Publication.module.css';

/*
 * COMPONENT
 */
const Publication = ({ pablication }) => (
  <article className={styles.publication}>
    <h2>{pablication.title}</h2>
    <p>{pablication.text}</p>
  </article>
);

Publication.propTypes = {
  pablication: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};

export default Publication;

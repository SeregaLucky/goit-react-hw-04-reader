/* import - node_modules */
import React, { Component } from 'react';
import T from 'prop-types';
/* import - CSS */
import styles from './Reader.module.css';
/* import - COMPONENT */
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

/*
 * COMPONENT
 */
class Reader extends Component {
  static propTypes = {
    publications: T.arrayOf(T.shape().isRequired).isRequired,

    location: T.shape().isRequired,
    history: T.shape().isRequired,
  };

  componentDidMount() {
    const { publications, location, history } = this.props;

    const item = new URLSearchParams(location.search).get('item');

    /* входим если это число и если это целое число */
    if (Number(item) && Number.isInteger(Number(item))) {
      /* если вели число больше чем в массиве */
      if (Number(item) > publications.length) {
        history.push({
          ...location,
          search: `item=${publications.length}`,
        });

        return;
      }
      /* если вели число меньше чем в массиве */
      if (Number(item) < 1) {
        history.push({
          ...location,
          search: 'item=1',
        });

        return;
      }

      /* если вели число в приделе линны массиве */
      history.push({
        ...location,
        search: `item=${item}`,
      });

      return;
    }

    /* в остальнвх случаях */
    history.push({
      ...location,
      search: 'item=1',
    });
  }

  handleChangeIdxIncrement = () => {
    const { publications, location, history } = this.props;

    const item = new URLSearchParams(location.search).get('item');

    if (Number(item) >= publications.length) return;

    history.push({
      ...location,
      search: `item=${Number(item) + 1}`,
    });
  };

  handleChangeIdxArrayDecrement = () => {
    const { location, history } = this.props;

    const item = new URLSearchParams(location.search).get('item');

    if (Number(item) <= 0) return;

    history.push({
      ...location,
      search: `item=${Number(item) - 1}`,
    });
  };

  render() {
    const { publications, location } = this.props;

    const item = new URLSearchParams(location.search).get('item');

    return (
      <div className={styles.reader}>
        <Controls
          onChangeIdxIncrement={this.handleChangeIdxIncrement}
          onChangeIdxDecrement={this.handleChangeIdxArrayDecrement}
          item={Number(item)}
          allPages={publications.length}
        />

        <Counter item={Number(item)} allPages={publications.length} />

        {item > 0 &&
          item <= publications.length &&
          Number.isInteger(Number(item)) && (
            <Publication pablication={publications[Number(item) - 1]} />
          )}
      </div>
    );
  }
}

export default Reader;

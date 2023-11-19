import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

function TimeLabel({ from, to, isOdd }) {
  const label = [from, to].join(' - ');

  return (
    <label className={cn(styles.label, isOdd && styles.label_odd)}>
      {label}
    </label>
  );
}

export default TimeLabel;

import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';

function GapDiv({ children, isRow, gap, style = {}, ...rest }) {
  const styleObject = {
    gap: `${gap}px`,
    ...style,
  };

  return (
    <div
      className={cn(styles.container, isRow && styles.container_row)}
      style={styleObject}
      {...rest}
    >
      {children}
    </div>
  );
}

export default GapDiv;

import React from 'react';
import PlaceListItem from '../../atoms/PlaceListItem';
import styles from './styles.module.scss'

function PlaceList({ list = [] }) {
  return (
    <ul className={styles.ul}>
      {list.map((l) => (
        <PlaceListItem key={l}>{l}</PlaceListItem>
      ))}
    </ul>
  );
}

export default PlaceList;

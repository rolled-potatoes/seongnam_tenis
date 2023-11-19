import React from 'react';
import PlaceList from '../PlaceList';
import TimeLabel from '../../atoms/TimeLabel';
import styles from './styles.module.scss';

function TimePlaceList({ list, from, to, isOdd }) {
  return (
    <div className={styles.container}>
      <TimeLabel from={from} to={to} isOdd={isOdd}></TimeLabel>
      <PlaceList list={list} />
    </div>
  );
}

export default TimePlaceList;

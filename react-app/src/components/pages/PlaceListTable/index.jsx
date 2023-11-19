import React from 'react';
import cn from 'classnames';
import GapDiv from '../../atoms/GapDiv';
import Typography from '../../atoms/Typography';
import TimePlaceList from '../../molecules/TimePlaceList';
import { useGetPlaces } from '../../../query-hooks/usePlaces';
import styles from './styles.module.scss';

function PlaceListTable() {
  const {
    data: { data },
  } = useGetPlaces();

  const placeTimeList = React.useMemo(() => {
    return Object.values(
      Object.entries(data.items).reduce((acc, [place, times]) => {
        times.forEach((time) => {
          if (!acc[time]) {
            const regexPattern = /^(\d{1,2}:\d{1,2}) ~ (\d{1,2}:\d{1,2})$/;
            const re = regexPattern.exec(time);
            if (!re) return;
            const [_, from, to] = re;
            acc[time] = {
              from,
              to,
              places: [],
            };
          }
          acc[time].places.push(place);
        });
        return acc;
      }, {}),
    ).sort((a, b) => a.from.split(':')[0] - b.from.split(':')[0]);
  }, [data]);

  return (
    <GapDiv gap={12} className={cn(styles.container)}>
      <div className={cn(styles.header)}>
        <GapDiv gap={10} isRow>
          <Typography tag="h6" className={cn(styles.timeBox, styles.titleBox)}>
            시간
          </Typography>
          <Typography tag="h6" className={cn(styles.titleBox)}>
            장소
          </Typography>
        </GapDiv>
        <hr />
      </div>
      <GapDiv gap={10}>
        {placeTimeList.map((placeTime, idx) => {
          const { from, to, places } = placeTime;
          const isOdd = idx % 2 === 0;
          return (
            <TimePlaceList
              key={from}
              from={from}
              to={to}
              list={places}
              isOdd={isOdd}
            />
          );
        })}
      </GapDiv>
    </GapDiv>
  );
}

export default PlaceListTable;

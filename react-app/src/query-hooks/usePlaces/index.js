import * as apis from './api';
import { keys } from './keys';
import { useQuery } from 'react-query';

export function useGetPlaces() {
  const result = useQuery(keys.default(), apis.getPlaces);

  return result;
}

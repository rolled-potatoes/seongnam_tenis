import axios from 'axios';

export function getPlaces() {
  return axios({
    method: 'GET',
    url: import.meta.env.API_URI,
  });
}

import axios from 'axios';

export function getPlaces() {
  return axios({
    method: 'GET',
      url: import.meta.env.VITE_API_URI,
  });
}

import axios from 'axios';

export function getPlaces() {
  return axios({
    method: 'GET',
    url: 'https://p5kxyu8t53.execute-api.ap-northeast-2.amazonaws.com/default/tenis',
  });
}

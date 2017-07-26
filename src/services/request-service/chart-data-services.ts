import axios from 'axios';
import requestConfig from '../request-config';

export const fetchBarData: () => void = () => {
  axios.get(requestConfig.barDataAPI)
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error);
  });
};

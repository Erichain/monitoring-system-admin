import axios from 'axios';
import requestConfig from '../request-config';

export const fetchBarData: any = () => {
  return axios.get(requestConfig.barDataAPI)
  .catch(error => {
    console.error(error);
  });
};

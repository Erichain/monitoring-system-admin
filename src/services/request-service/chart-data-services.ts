import axios from 'axios';
import requestConfig from '../request-config';

export const fetchBarData: any = () => {
  return axios.get(requestConfig.barDataAPI)
  .catch(error => {
    console.error(error);
  });
};

export const fetchLineData: any = () => {
  return axios.get(requestConfig.lineDataAPI)
    .catch(error => {
      console.error(error);
    });
};

export const fetchPolarAreaData: any = () => {
  return axios.get(requestConfig.polarAreaDataAPI)
    .catch(error => {
      console.error(error);
    });
};

import axios, {AxiosInstance} from 'axios';

import {REQUEST_TIMEOUT} from '../constants/api.constants';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    timeout: REQUEST_TIMEOUT
  });

  return api;
};

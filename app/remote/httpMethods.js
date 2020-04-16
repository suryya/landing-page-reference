/* eslint-disable */
import axios from 'axios';

import { BASE_URL, AUTH_URL } from '../settings/apiEndpoints';

export const baseURL = BASE_URL;

class Api {
  static headers(headersparams) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'x-api-key': apiKey,
      ...headersparams,
    };
  }

  static get(route, key = null) {
    return this.request(route, null, 'GET', key);
  }

  static put(route, params, key = null) {
    return this.request(route, params, 'PUT', key);
  }

  static post(route, params, key) {
    console.log('params', params);
    return this.request(route, params, 'POST', key);
  }

  static postAuth(route, params, key) {
    return this.requestAuth(route, params, 'POST', key);
  }

  static delete(route, params, key = null) {
    return this.request(route, params, 'DELETE', key);
  }

  static patch(route, params, key = null) {
    return this.request(route, params, 'PATCH', key);
  }

  static request(route, params, verb, key) {
    if (route.match('https://')) {
      const url = `${route}`;
      const options = { method: verb, params };
      console.log(url, options);
      return axios(url, options);
    }
    const host = baseURL;
    const url = `${host}${route}`;
    const options = { method: verb, data: params };
    const keys = {
      ...key,
      // Authorization: localStorage.getItem('Authorization'),
    };
    options.headers = Api.headers(keys);
    console.log(url, options);
    return axios(url, options);
  }

  static requestAuth(route, params, verb, key) {
    if (route.match('https://')) {
      const url = `${route}`;
      const options = { method: verb, params };
      console.log(url, options);
      return axios(url, options);
    }
    const host = AUTH_URL;
    const url = `${host}${route}`;
    const options = { method: verb, data: params };
    const keys = {
      ...key,
      // Authorization: localStorage.getItem('Authorization'),
    };
    options.headers = Api.headers(keys);
    console.log(url, options);
    return axios(url, options);
  }
}

export default Api;

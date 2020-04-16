/* eslint-disable */
import Api from './httpMethods';

import {  USER_LOGIN_POST, EMPLOYEE_LIST, EMPLOYEE_SINGLE} from '../settings/apiEndpoints';

const keys = () => {
  return {};//localStorage.getItem('planId') && !isNaN(localStorage.getItem('planId')) ? ({
  //  plan_id: localStorage.getItem('planId'),
  //}) : {}
};

export const userLoginPost = params => Api.postAuth(USER_LOGIN_POST, params, keys());
export const fetchEmployeesBasic = params => Api.get(EMPLOYEE_LIST);
export const fetchSingleEmployeesDetails = params => Api.get(EMPLOYEE_SINGLE+params);


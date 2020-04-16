/* eslint-disable */
//import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';
import { REHYDRATE } from 'redux-persist/lib/constants';
import isEmpty from 'lodash/isEmpty';

/// LOGIN_USER_DATA, LOGIN_USER_DATA_SUCCESS, LOGIN_USER_DATA_ERROR , 
// Action types
import {
  FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_ERROR,
  FETCH_SINGLE_EMPLOYEE, FETCH_SINGLE_EMPLOYEE_ERROR, FETCH_SINGLE_EMPLOYEE_SUCCESS
} from './actions';

export const employeeState = {
  success: false,
  loading: false,
  error: null,
  loaded: false,
  list:[],
  single:null
};


export default function employeeReducer(stateVal = employeeState, action) {

  const stateAactions = {
    [REHYDRATE]: (state) => immutable(state, {
      success: { $set: false },
      loading: { $set: false },
      error: { $set: null },
      loaded: { $set: false },
      list:  { $set: [] },
      single:{}
    }),
    [FETCH_EMPLOYEES]: (state) => immutable(state, {
      loading: { $set: true },
      success: { $set: false },
      loaded: { $set: false }
    }),
    [FETCH_EMPLOYEES_SUCCESS]: (state, { payload }) => {
      return immutable(state, {
        list: { $set: (payload) || [] },
        loading: { $set: false },
        success: { $set: true },
        error: { $set: null },
        loaded: { $set: true }
      });
    },
    [FETCH_EMPLOYEES_ERROR]: (state, { payload }) => {
      let err = (payload && !isEmpty(payload.error) && payload.error) || '';
      err = !isEmpty(err) ? err : (payload && payload.msg) || '';
      err = !err || 'Error'
      // const emailErr = /email/g.test(err) ? err : '';
      // const passwordErr = /password/g.test(err) ? err : '';

      return immutable(state, {
        loading: { $set: false },
        error: { $set: { message: err} },
        success: { $set: false },
        loaded: { $set: true }
      });
    },
    [FETCH_SINGLE_EMPLOYEE]: (state) => immutable(state, {
      loading: { $set: true },
      success: { $set: false },
      loaded: { $set: false }
    }),
    [FETCH_SINGLE_EMPLOYEE_SUCCESS]: (state, { payload }) => {
      return immutable(state, {
        single: { $set: (payload) || [] },
        loading: { $set: false },
        success: { $set: true },
        error: { $set: null },
        loaded: { $set: true }
      });
    },
    [FETCH_SINGLE_EMPLOYEE_ERROR]: (state, { payload }) => {
      let err = (payload && !isEmpty(payload.error) && payload.error) || '';
      err = !isEmpty(err) ? err : (payload && payload.msg) || '';
      err = !err || 'Error'
      // const emailErr = /email/g.test(err) ? err : '';
      // const passwordErr = /password/g.test(err) ? err : '';

      return immutable(state, {
        loading: { $set: false },
        error: { $set: { message: err} },
        success: { $set: false },
        loaded: { $set: true }
      });
    },

  }
  return stateAactions[action.type] ? stateAactions[action.type](stateVal, action) : stateVal;
}
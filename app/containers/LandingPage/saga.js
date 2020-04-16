/* eslint-disable */
//import { takeLatest, put, call, all } 
import * as SAGA from 'redux-saga/effects';
import {
  FETCH_EMPLOYEES,
  FETCH_SINGLE_EMPLOYEE,
  fetchEmployeesSuccess,
  fetchEmployeesError,
  fetchSingleEmployeeSuccess,
  fetchSingleEmployeeError,
} from './actions';

import * as Rest from '../../remote/restMethods';


export function* singleeEployeeDataFetch(action, fetchSingleEmployeesDetails = Rest.fetchSingleEmployeesDetails ) {
  try {
    const res = yield SAGA.call(fetchSingleEmployeesDetails, action.payload);
    
    yield SAGA.put(fetchSingleEmployeeSuccess(res.data));
  } catch (err) {
    yield SAGA.put(fetchSingleEmployeeError('Something went wrong!',err));
  }
}

export function* employeeDataFetch(action, fetchEmployeesBasic = Rest.fetchEmployeesBasic ) {
  try {
    const res = yield SAGA.call(fetchEmployeesBasic, {});
    
    yield SAGA.put(fetchEmployeesSuccess(res.data));
  } catch (err) {
    yield SAGA.put(fetchEmployeesError('Something went wrong!'));
  }
}



// Watcher Saga
export function* watchFetchEmployeeData() {
  yield SAGA.takeLatest(FETCH_EMPLOYEES, employeeDataFetch);
  yield SAGA.takeLatest(FETCH_SINGLE_EMPLOYEE, singleeEployeeDataFetch);
}

export default function* employeeSaga() {
  yield SAGA.all([
    watchFetchEmployeeData()
  ]);
}

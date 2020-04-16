import { REHYDRATE } from 'redux-persist/lib/constants';

export const FETCH_EMPLOYEES = '@@employees/FETCH_EMPLOYEES';
export const FETCH_EMPLOYEES_SUCCESS = '@@employees/FETCH_EMPLOYEES_SUCCESS';
export const FETCH_EMPLOYEES_ERROR = '@@employees/FETCH_EMPLOYEES_ERROR';
export const FETCH_SINGLE_EMPLOYEE = '@@employees/FETCH_SINGLE_EMPLOYEE';
export const FETCH_SINGLE_EMPLOYEE_SUCCESS = '@@employees/FETCH_SINGLE_EMPLOYEE_SUCCESS';
export const FETCH_SINGLE_EMPLOYEE_ERROR = '@@employees/FETCH_SINGLE_EMPLOYEE_ERROR';

export const employeeListReset = () => ({
  type: REHYDRATE,
  payload: {},
});

export const fetchSingleEmployee = (payload) => ({
  type: FETCH_SINGLE_EMPLOYEE,
  payload,
});

export const fetchSingleEmployeeSuccess = (payload) => ({
  type: FETCH_SINGLE_EMPLOYEE_SUCCESS,
  payload,
});

export const fetchSingleEmployeeError = (payload) => ({
  type: FETCH_SINGLE_EMPLOYEE_ERROR,
  payload,
});

export const fetchEmployees = (payload) => ({
  type: FETCH_EMPLOYEES,
  payload,
});

export const fetchEmployeesSuccess = (payload) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload,
});

export const fetchEmployeesError = (payload) => ({
  type: FETCH_EMPLOYEES_ERROR,
  payload,
});

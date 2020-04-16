/* eslint-disable */
import { createSelector } from 'reselect';


const selectEmployees = (state) => {
    
  return ( state && state.employees && state.employees.list) ? state.employees.list : []
}

const selectSingleEmployee = (state) => {
    
  return ( state && state.employees && state.employees.single) ? state.employees.single : null
}

const makeSelectEmployeesStatus = () => createSelector(
  selectEmployees,
  (employees) => {
    return employees || null
    }
);

const makeSelectSingleEmployeeStatus = () => createSelector(
  selectSingleEmployee,
  (single) => {
    return single || null
    }
);

export {
  selectEmployees,
  selectSingleEmployee,
  makeSelectEmployeesStatus,
  makeSelectSingleEmployeeStatus
};

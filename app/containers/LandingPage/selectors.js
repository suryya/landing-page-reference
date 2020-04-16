import { createSelector } from 'reselect';


const selectEmployees = (state) => ((state && state.employees && state.employees.list) ? state.employees.list : []);

const selectSingleEmployee = (state) => ((state && state.employees && state.employees.single) ? state.employees.single : null);

const makeSelectEmployeesStatus = () => createSelector(
  selectEmployees,
  (employees) => employees || null
);

const makeSelectSingleEmployeeStatus = () => createSelector(
  selectSingleEmployee,
  (single) => single || null
);

export {
  selectEmployees,
  selectSingleEmployee,
  makeSelectEmployeesStatus,
  makeSelectSingleEmployeeStatus
};

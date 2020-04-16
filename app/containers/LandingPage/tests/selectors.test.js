import {
  selectEmployees,
  makeSelectEmployeesStatus,
  selectSingleEmployee,
  makeSelectSingleEmployeeStatus,
} from '../selectors';

const employeesList = [
  {
    id: 1,
    employeeId: 'Emp123',
    name: 'john dow',
    age: 18,
    addresses: [
      {
        id: 1,
        location: 'Kolkata',
      },
      {
        id: 2,
        location: 'Delhi',
      },
      {
        id: 3,
        location: 'Bombay',
      },
      {
        id: 4,
        location: 'Hydrabad',
      },
    ],
  },
];
const employeeState = {
  employees: {
    list: employeesList,
    single: employeesList[0],
  },
};

describe('selectEmployees', () => {
  it('should select the Employees', () => {
    expect(selectEmployees(employeeState)).toEqual(employeesList);
  });
});

describe('selectSingleEmployee', () => {
  it('should select the single Employees', () => {
    expect(selectSingleEmployee(employeeState)).toEqual(employeesList[0]);
  });
});

describe('makeSelectUsername', () => {
  const employeesSelector = makeSelectEmployeesStatus();
  it('should select employees', () => {
    expect(employeesSelector(employeeState)).toEqual(employeesList);
  });
});

describe('makeSelectSingleEmployeeStatus', () => {
  const employeeSingleSelector = makeSelectSingleEmployeeStatus();
  it('should select employees', () => {
    expect(employeeSingleSelector(employeeState)).toEqual(employeesList[0]);
  });
});

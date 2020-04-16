// import { REHYDRATE, FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS } from 'redux-persist/lib/constants';
import employeeReducer from '../reducer';

import {
  fetchEmployees, fetchEmployeesSuccess, fetchEmployeesError,
  fetchSingleEmployeeSuccess, fetchSingleEmployee, fetchSingleEmployeeError
} from '../actions';
// import { changeUsername } from '../actions';

describe('employeeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      success: false,
      loading: false,
      error: null,
      loaded: false,
      single: null,
      list: []
    };
  });

  it('should return the initial state fetchEmployees', () => {
    const expectedResult = { ...state, ...{ success: false, loading: true, loaded: false } };
    const action = fetchEmployees();
    expect(employeeReducer(undefined, action)).toEqual(expectedResult);
  });

  it('should return the initial state fetchEmployees', () => {
    const expectedResult = { ...state, ...{ success: false, loading: true, loaded: false } };
    const action = fetchSingleEmployee();
    expect(employeeReducer(undefined, action)).toEqual(expectedResult);
  });


  it('should return the error state fetchEmployeesError', () => {
    const expectedResult = {
      ...state,
      ...{
        success: false,
        loading: false,
        loaded: true,
        error: { message: 'Error' }
      }
    };
    const action = fetchEmployeesError({ error: 'Error', msg: 'Unknown' });
    // eslint-disable-next-line no-console
    // console.log(employeeReducer(undefined, action));
    expect(employeeReducer(undefined, action)).toEqual(expectedResult);
  });


  it('should return the error state fetchSingleEmployeeError', () => {
    const expectedResult = {
      ...state,
      ...{
        success: false,
        loading: false,
        loaded: true,
        error: { message: 'Error' }
      }
    };
    const action = fetchSingleEmployeeError({ error: 'Error', msg: 'Unknown' });
    // eslint-disable-next-line no-console
    // console.log(employeeReducer(undefined, action));
    expect(employeeReducer(undefined, action)).toEqual(expectedResult);
  });

  it('should return the loaded state fetchEmployeesSuccess', () => {
    const action = fetchEmployeesSuccess([{
      id: 1,
      employeeId: 'Emp123',
      name: 'john dow',
      age: 18,
      addresses: [
        {
          id: 1,
          location: 'Kolkata'
        },
        {
          id: 2,
          location: 'Delhi'
        },
        {
          id: 3,
          location: 'Bombay'
        },
        {
          id: 4,
          location: 'Hydrabad'
        }
      ]
    }]);
    const expectedResult = {
      ...state,
      ...{
        success: true,
        loading: false,
        loaded: true,
        error: null,
        list: [{
          id: 1,
          employeeId: 'Emp123',
          name: 'john dow',
          age: 18,
          addresses: [
            {
              id: 1,
              location: 'Kolkata'
            },
            {
              id: 2,
              location: 'Delhi'
            },
            {
              id: 3,
              location: 'Bombay'
            },
            {
              id: 4,
              location: 'Hydrabad'
            }
          ]
        }]
      }
    };
    // eslint-disable-next-line no-console
    // console.log(employeeReducer(undefined, action));
    expect(employeeReducer(undefined, action)).toEqual(expectedResult);
  });


  it('should return the loaded state fetchEmployeesSuccess', () => {
    const action = fetchSingleEmployeeSuccess({
      id: 1,
      employeeId: 'Emp123',
      name: 'john dow',
      age: 18,
      addresses: [
        {
          id: 1,
          location: 'Kolkata'
        },
        {
          id: 2,
          location: 'Delhi'
        },
        {
          id: 3,
          location: 'Bombay'
        },
        {
          id: 4,
          location: 'Hydrabad'
        }
      ]
    });
    const expectedResult = {
      ...state,
      ...{
        success: true,
        loading: false,
        loaded: true,
        error: null,
        single: {
          id: 1,
          employeeId: 'Emp123',
          name: 'john dow',
          age: 18,
          addresses: [
            {
              id: 1,
              location: 'Kolkata'
            },
            {
              id: 2,
              location: 'Delhi'
            },
            {
              id: 3,
              location: 'Bombay'
            },
            {
              id: 4,
              location: 'Hydrabad'
            }
          ]
        }
      }
    };
    expect(employeeReducer(undefined, action)).toEqual(expectedResult);
  });
});

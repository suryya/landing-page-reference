import { runSaga } from 'redux-saga';
import * as Rest from '../../../remote/restMethods';


import {
  fetchEmployeesSuccess, fetchEmployeesError,
  fetchSingleEmployeeError, fetchSingleEmployeeSuccess
} from '../actions';

import { employeeDataFetch, singleeEployeeDataFetch } from '../saga';


describe('Test employee saga', () => {
  const mockResSuccess = {
    data: [{
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
    }],
    status: 200,
  };

  const mockResSuccessSingle = {
    data: {
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
    },
    status: 200,
  };

  const mockResError = {
    status: 400,
  };
  describe('Test employeeDataFetch', () => {
    it('should call employeeDataFetch api and dispatch success action', async () => {
      const dispatched = [];
      Rest.fetchEmployeesBasic = jest.fn(() => Promise.resolve(mockResSuccess));

      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        employeeDataFetch,
        { payload: {} },
      ).toPromise();


      expect(Rest.fetchEmployeesBasic.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(fetchEmployeesSuccess(mockResSuccess.data));
    });
  });


  describe('Test singleeEployeeDataFetch', () => {
    it('should call singleeEployeeDataFetch api and dispatch success action', async () => {
      const dispatched = [];
      Rest.fetchSingleEmployeesDetails = jest.fn(() => Promise.resolve(mockResSuccessSingle));

      await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        singleeEployeeDataFetch,
        { payload: {} },
      ).toPromise();


      expect(Rest.fetchSingleEmployeesDetails.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(fetchSingleEmployeeSuccess(mockResSuccess.data[0]));
    });
  });


  it('should call singleeEployeeDataFetch api and dispatch error action', async () => {
    const dispatched = [];

    Rest.fetchSingleEmployeesDetails = jest.fn(() => Promise.reject(mockResError));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      singleeEployeeDataFetch,
      { payload: {} },
    ).toPromise();

    expect(Rest.fetchSingleEmployeesDetails.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(fetchSingleEmployeeError('Something went wrong!'));
  });

  it('should call employeeDataFetch api and dispatch error action', async () => {
    const dispatched = [];

    Rest.fetchEmployeesBasic = jest.fn(() => Promise.reject(mockResError));
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      employeeDataFetch,
      { payload: {} },
    ).toPromise();

    expect(Rest.fetchEmployeesBasic.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(fetchEmployeesError('Something went wrong!'));
  });
});

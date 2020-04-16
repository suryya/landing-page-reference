
import {
  fetchEmployees, fetchEmployeesError, fetchEmployeesSuccess,
  FETCH_EMPLOYEES, FETCH_EMPLOYEES_ERROR, FETCH_EMPLOYEES_SUCCESS,
  fetchSingleEmployee, fetchSingleEmployeeError, fetchSingleEmployeeSuccess,
  FETCH_SINGLE_EMPLOYEE_ERROR, FETCH_SINGLE_EMPLOYEE_SUCCESS, FETCH_SINGLE_EMPLOYEE
} from '../actions';


describe('Initiate Fetch Employess Actions', () => {
  describe('fetchEmployees', () => {
    it('should return the  object with type FETCH_EMPLOYEES', () => {
      const expectedResult = {
        type: FETCH_EMPLOYEES,
      };
      expect(fetchEmployees()).toEqual(expectedResult);
    });
  });

  describe('fetchSingleEmployee', () => {
    it('should return the  object with type FETCH_EMPLOYEES', () => {
      const expectedResult = {
        type: FETCH_SINGLE_EMPLOYEE
      };
      expect(fetchSingleEmployee()).toEqual(expectedResult);
    });
  });

  describe('Fetch Single Employess success action', () => {
    it('should return the login object after', () => {
      const expectedResult = {
        type: FETCH_SINGLE_EMPLOYEE_SUCCESS,
        payload: {
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
      };

      expect(fetchSingleEmployeeSuccess(
        {
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
      )).toEqual(expectedResult);
    });
  });


  describe('Fetch Employess success action', () => {
    it('should return the login object after', () => {
      const expectedResult = {
        type: FETCH_EMPLOYEES_SUCCESS,
        payload: [
          {
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
        ]
      };

      expect(fetchEmployeesSuccess([
        {
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
      ])).toEqual(expectedResult);
    });
  });


  describe('Fetch Single Employess error action', () => {
    it('should return the login object after', () => {
      const expectedResult = {
        type: FETCH_SINGLE_EMPLOYEE_ERROR,
        payload: 'Some error has been triggered'
      };
      expect(fetchSingleEmployeeError('Some error has been triggered')).toEqual(expectedResult);
    });
  });

  describe('Fetch Employess error action', () => {
    it('should return the login object after', () => {
      const expectedResult = {
        type: FETCH_EMPLOYEES_ERROR,
        payload: 'Some error has been triggered'
      };

      expect(fetchEmployeesError('Some error has been triggered')).toEqual(expectedResult);
    });
  });
});

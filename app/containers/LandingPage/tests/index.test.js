/**
 * Testing the LandinPage
 */
import React from 'react';
import renderer from 'react-test-renderer';

import { render, fireEvent, cleanup } from '@testing-library/react';
import LandingPage from '../Landing';
import '@testing-library/jest-dom/extend-expect';

const employeeSuccessResp = [{
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
}];


const functions = {
  fetchEmployees: jest.fn().mockImplementation(() => null),
  fetchSingleEmployee: jest.fn().mockImplementation(() => null)
};

const data = {
  employees: employeeSuccessResp,
  singleSelectedEmployee: employeeSuccessResp[0]
};

afterEach(cleanup);

describe('<LandingPage/> loaded', () => {
  it('Renders without crashing', () => {
    const { getByTestId, queryAllByTestId } = render(
      <LandingPage {...functions} {...data} />,
    );
    // console.log(queryAllByTestId("filter-category").length)
    expect(getByTestId('list-caption')).toHaveTextContent('Customer List');
    expect(queryAllByTestId('employee-record').length).toBe(1);
    expect(queryAllByTestId('employee-list').length).toBe(1); // .toBeGreaterThan(1)
    expect(functions.fetchEmployees).toHaveBeenCalled();
  });


  it('Clicking record shows employee addresses', () => {
    const { queryAllByTestId } = render(
      <LandingPage {...functions} {...data} />,
    );

    const employeeRecords = queryAllByTestId('employee-record');
    fireEvent.click(employeeRecords[0]);
    expect(queryAllByTestId('employee-addresses').length).toBe(1);
    expect(queryAllByTestId('employee-address-location').length).toBe(4);
  });
});


describe('<LandingPage /> snapshot', () => {
  let component;

  beforeEach(() => {
    component = renderer.create(
      <LandingPage {...functions} {...data} />
    );
  });

  it('should render the component and compares the snapshot with old snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

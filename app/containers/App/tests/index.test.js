import React from 'react';
import { shallow } from 'enzyme';
// import { Route } from 'react-router-dom';

import Header from 'components/Header';
// import Footer from 'components/Footer';
import App from '../index';

describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toBe(0);
  });
});

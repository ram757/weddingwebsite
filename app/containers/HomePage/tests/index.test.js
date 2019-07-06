/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../HomePage';

describe('<HomePage />', () => {
  it('should render Homepage', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<h2>Ryan and Brigitte</h2>)).toBe(true);
  });
});

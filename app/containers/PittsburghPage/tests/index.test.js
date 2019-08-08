import React from 'react';
import { shallow } from 'enzyme';

import PittsburghPage from '../index';

describe('<PittsburghPage />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<PittsburghPage />);
    expect(!!renderedComponent).toBe(true);
  });
});

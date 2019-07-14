import React from 'react';
import { shallow } from 'enzyme';

import AccommodationsPage from '../index';

describe('<AccommodationsPage />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<AccommodationsPage />);
    expect(!!renderedComponent).toBe(true);
  });
});

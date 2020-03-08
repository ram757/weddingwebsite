import React from 'react';
import { shallow } from 'enzyme';

import RegistryPage from '../index';

describe('<RegistryPage />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<RegistryPage />);
    expect(!!renderedComponent).toBe(true);
  });
});

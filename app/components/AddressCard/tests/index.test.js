import React from 'react';
import { shallow } from 'enzyme';

import AddressCard from '../index';

describe('<AddressCard />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<AddressCard />);
    expect(!!renderedComponent).toBe(true);
  });
});

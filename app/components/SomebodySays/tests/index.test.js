import React from 'react';
import { shallow } from 'enzyme';

import SomebodySays from '../index';

describe('<SomebodySays />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<SomebodySays />);
    expect(!!renderedComponent).toBe(true);
  });
});

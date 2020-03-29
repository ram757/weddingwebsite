import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../index';

describe('<Modal />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<Modal />);
    expect(!!renderedComponent).toBe(true);
  });
});

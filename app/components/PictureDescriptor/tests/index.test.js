import React from 'react';
import { shallow } from 'enzyme';

import PictureDescriptor from '../index';

describe('<PictureDescriptor />', () => {
  it('should render the component', () => {
    const renderedComponent = shallow(<PictureDescriptor />);
    expect(!!renderedComponent).toBe(true);
  });
});

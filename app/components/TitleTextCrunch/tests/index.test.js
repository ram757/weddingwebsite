import React from 'react';
import { shallow } from 'enzyme';

import TitleTextCrunch from '../index';

describe('<TitleTextCrunch />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<TitleTextCrunch />);
    expect(!!renderedComponent).toBe(true);
  });
});

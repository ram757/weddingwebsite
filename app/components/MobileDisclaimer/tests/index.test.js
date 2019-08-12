import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<MobileDisclaimer />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<MobileDisclaimer />);
    expect(!!renderedComponent).toBe(true);
  });
});

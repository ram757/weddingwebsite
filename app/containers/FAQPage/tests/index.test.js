import React from 'react';
import { shallow } from 'enzyme';

import FAQPage from '../index';

describe('<FAQPage />', () => {
  it('should render', () => {
    const renderedComponent = shallow(<FAQPage />);
    expect(!!renderedComponent).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.text()).toContain('Ryan');
    expect(renderedComponent.text()).toContain('Brigitte');
  });
});

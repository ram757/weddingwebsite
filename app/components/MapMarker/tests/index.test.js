import React from 'react';
import { shallow } from 'enzyme';

import MapMarker from '../index';

describe('<MapMarker />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<MapMarker />);
    expect(!!renderedComponent).toBe(true);
  });
});

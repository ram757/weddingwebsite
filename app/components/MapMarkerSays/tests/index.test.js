import React from 'react';
import { shallow } from 'enzyme';

import MapMarkerSays from '../index';

describe('<MapMarkerSays />', () => {
  it('should render our names', () => {
    const renderedComponent = shallow(<MapMarkerSays />);
    expect(!!renderedComponent).toBe(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import BogusPage from '../index';

describe('<BogusPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(<BogusPage />);
    expect(renderedComponent.contains(<h1>Stuff to do</h1>)).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(<BogusPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});

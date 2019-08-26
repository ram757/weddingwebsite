/**
 * Test the WeddingPartyPage
 */

import React from 'react';
import { shallow } from 'enzyme';

import WeddingPartyPage from '../WeddingPartyPage';

describe('<WeddingPartyPage />', () => {
  it('should render WeddingPartyPage', () => {
    const renderedComponent = shallow(<WeddingPartyPage />);
    expect(!!renderedComponent).toBe(true);
  });
});

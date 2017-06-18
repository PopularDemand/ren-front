import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import {expect} from 'chai';

import Home from '../../src/components/pages/Home';

describe('Home', () => {
  
  it('renders a greeting', () => {
    const component = renderIntoDocument(
      <Home />
    );
    const greeting = findRenderedDOMComponentWithClass(component, 'greeting');

    expect(greeting.textContent).to.equal('Hello Ren');
  });

});
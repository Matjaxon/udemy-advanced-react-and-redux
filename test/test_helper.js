/* We normally run our JS application in the browser as a script, but
we're executing specs from the terminal.  So how do we create this
similar environment in the command line.  JSDOM can do this.  It
emulates the DOM in the command line. */

// STEP 1:  Set up testing environment to run like a browser in the command line
import jsdom from 'jsdom';
import React from 'react';

// We'll need to tell jQuery what the window is.
import jquery from 'jquery';

// window === global in terminal.  We can create a mini-fake webpage.
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

// Don't look in browser, look in fake DOM.  Now we can use jQuery like normal.
const $ = jquery(global.window);

// END OF STEP 1

// STEP 2: Build 'renderComponent' helper that should render a given react className
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TestUtils from 'react-addons-test-utils';
import reducers from '../src/reducers';

// Create an instance of a component, but this is not the DOM node.
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  /* Produces the actual HTML node.  Wrapped with jQuery to allow us to
  use all of the helpful chai-jQuery matchers */
  return $(ReactDOM.findDOMNode(componentInstance));
}

// END OF STEP 2

// STEP 3: Build helper for simulating events

/*  We call #simulate on a jQuery element in our tests.  We pass in event
type and value.  The $.fn adds the method to all jQuery elements. */
$.fn.simulate = function(eventName, value) {

  // Once we've in the jQuery object, we can use "this" to tap into the element.
  if (value) {
    this.val(value); // val is jQuery method to set the value of the element.
  }

  /* We can use the [] for metaprogramming.  We can pass in the name of
  the method to the function above and that will be called as #eventName */
  TestUtils.Simulate[eventName](this[0]);  // Only first item.
};

// STEP 4: Set up chai-jQuery
import { expect } from 'chai';
import chaiJquery from 'chai-jquery';
import chai from 'chai';

chaiJquery(chai, chai.util, $);  // Check documenation to understand this.

// END OF STEP 4

export { renderComponent, expect };

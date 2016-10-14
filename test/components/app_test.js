import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/*
describe - use to group together similar tests

it - test a single attribute of a target

expect - make an assertion about the target (the component)

Wrapping all of the tests in callbacks lets the testing suite load
regardless of what errors are in the code rather than crashing everything.
*/

// Name top level describe just the component being tested
describe('App', () => {
  it('shows the correct text', () => {

    // create instance of Ap
    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');
  });
});

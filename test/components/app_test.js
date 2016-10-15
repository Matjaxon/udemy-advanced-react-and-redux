import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

/*
describe - use to group together similar tests

it - test a single attribute of a target

expect - make an assertion about the target (the component)

Wrapping all of the tests in callbacks lets the testing suite load
regardless of what errors are in the code rather than crashing everything.

Run npm test:watch to run tests every time you save a file
*/

// Name top level describe just the component being tested
describe('App', () => {

  let component;
  beforeEach( () => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});

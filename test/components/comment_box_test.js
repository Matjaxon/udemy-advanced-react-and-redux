import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

/*
In the testing suite we we will use jQuery with the Chai library.
The expect that we're using now is not the traditional expect.
It's from Chai.
*/

describe('CommentBox', () => {

  let component; // initialize before the beforeEach
  beforeEach( () => {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component).to.exist; // No parens for some Chai matchers.

    // Use jQuery to search for a tag and it will return the html elment
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});

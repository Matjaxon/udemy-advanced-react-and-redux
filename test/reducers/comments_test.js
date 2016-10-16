import { expect } from '../test_helper';
// Don't need renderComponent because we aren't rendering anyting

import CommentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown types', () => {
    expect(CommentReducer(undefined, {})).to.be.instanceOf(Array);

    // eql does a deep dup comparison.  Doesn't need to be the same instance.
    expect(CommentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };
    expect(CommentReducer([], action)).to.eql(['new comment']);
  });
});

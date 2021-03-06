import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment } from '../actions/index';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    this.props.saveComment(this.state.comment);
    this.setState({comment: ""});
  }

  render() {
    return (
      <form className='comment-box' onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}/>
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveComment: (comment) => dispatch(saveComment(comment))
});

export default connect(null, mapDispatchToProps)(CommentBox);

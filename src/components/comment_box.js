import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {comment:''};
  }
  handleChange(event){
    this.setState({comment: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
      this.props.save_comment(this.state.comment);
      this.setState({comment:''});
  }

  render(){

    return(
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Add a comment </h4>
        <textarea onChange={this.handleChange.bind(this)} value={this.state.comment}/>
        <div>
          <button type="submit">Submit comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);

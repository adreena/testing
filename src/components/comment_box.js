import React from 'react';


export default class CommentBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {comment:''};
  }
  handleChange(event){
    this.setState({comment: event.target.value});
  }

  handleSubmit(event){
      this.setState({comment:''});
  }

  render(){

    return(
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea onChange={this.handleChange.bind(this)} value={this.state.comment}/>
        <button type="submit">Submit comment</button>
      </form>
    );
  }
}

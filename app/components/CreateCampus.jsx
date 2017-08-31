import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { postCampus } from '../reducers/thunks'

class CreateCampus extends Component{
  constructor(props){
    super(props)
    this.nameInput = ''
    this.imageInput = ''
    this.nameHandleChange = this.nameHandleChange.bind(this)
    this.imageHandleChange = this.imageHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  nameHandleChange(event){
    this.nameInput = event.target.value
  }

  imageHandleChange(event){
    this.imageInput = event.target.value
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.post({
      name: this.nameInput,
      image: this.imageInput
    })
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Campus Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="Enter name"
          onChange={this.nameHandleChange}
        />
        <label> Image URL (optional)</label>
        <input
          type="text"
          className="form-control"
          id="inputImage"
          placeholder="Enter URL"
          onChange={this.imageHandleChange}
        />
      </div>
      <button type="submit" className="btn btn-default">Create</button>
    </form>)
  }
}

const mapState = null

const mapDispatch = (dispatch) => {
  return {
    post: (campus) => {
      const thunk = postCampus(campus)
      dispatch(thunk)
    }
  }
};

export default connect(mapState, mapDispatch)(CreateCampus);

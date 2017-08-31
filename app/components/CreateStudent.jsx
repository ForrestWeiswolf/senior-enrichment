import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { postStudent } from '../reducers/thunks'

class CreateStudent extends Component{
  constructor(props){
    super(props)
    this.nameInput = ''
    this.emailInput = ''
    this.campusInput = 1 //a campus id

    this.nameHandleChange = this.nameHandleChange.bind(this)
    this.emailHandleChange = this.emailHandleChange.bind(this)
    this.campusHandleChange = this.campusHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  nameHandleChange(event){
    this.nameInput = event.target.value
  }

  emailHandleChange(event){
    this.emailInput = event.target.value
  }

  campusHandleChange(event){
    this.campusInput = event.target.value
  }

  handleSubmit(event){
    event.preventDefault()

    this.props.post({
      name: this.nameInput,
      email: this.emailInput,
      campusId: this.campusInput
    })
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          placeholder="Enter name"
          onChange={this.nameHandleChange}
        />
        <label> Email </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="Enter email address"
          onChange={this.emailHandleChange}
        />
        <label> Campus </label>
        <select className="form-control" id="inputEmail" onChange={this.campusHandleChange}>
          {this.props.campuses.map( (campus) => {
            return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-default">Create</button>
    </form>)
  }
}

const mapState = (state) => {
  return {campuses: state.campuses}
}

const mapDispatch = (dispatch) => {
  return {
    post: (student) => {
      console.log('posting', student)
      const thunk = postStudent(student)
      dispatch(thunk)
    }
  }
};

export default connect(mapState, mapDispatch)(CreateStudent);

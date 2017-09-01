import React, {Component} from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { updateStudent } from '../reducers/thunks'

class EditStudent extends Component{
  constructor(props){
    super(props)
    this.state = {
      nameInput: '',
      emailInput: '',
      campusInput: 1, //a campus id
      studentId: 1
    }

    this.nameHandleChange = this.nameHandleChange.bind(this)
    this.emailHandleChange = this.emailHandleChange.bind(this)
    this.campusHandleChange = this.campusHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props){
    this.state = {
      nameInput: this.props.student.name,
      emailInput: this.props.student.email,
      campusInput: this.props.campus.id, //a campus id
      studentId: this.props.student.id
    }
  }

  nameHandleChange(event){
    this.setState({nameInput: event.target.value})
  }

  emailHandleChange(event){
    this.setState({emailInput: event.target.value})
  }

  campusHandleChange(event){
    this.setState({campusInput: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()

    this.props.save(this.state.studentId, {
      name: this.state.nameInput,
      email: this.state.emailInput,
      campusId: this.state.campusInput
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
          value={this.state.nameInput}
          onChange={this.nameHandleChange}
        />
        <label> Email </label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          value={this.state.emailInput}
          onChange={this.emailHandleChange}
        />
        <label> Campus </label>
        <select
          className="form-control"
          id="inputEmail"
          onChange={this.campusHandleChange}
          value={this.state.campusInput}
        >
          {this.props.campuses.map( (campus) => {
            return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-default">Save</button>
    </form>)
  }
}

const mapState = (state, ownProps) => {
  const student = state.students.find( (s) => (s.id == ownProps.match.params.id)) || {} //using type coercion
  const campus = state.campuses.find( (c) => (c.id == student.campusId)) || {}
  return {
    student: student,
    campus: campus,
    campuses: state.campuses
  }
}

const mapDispatch = (dispatch) => {
  return {
    save: (id, student) => {
      console.log('saving', student)
      const thunk = updateStudent(id, student)
      dispatch(thunk)
    }
  }
};

export default withRouter(connect(mapState, mapDispatch)(EditStudent));

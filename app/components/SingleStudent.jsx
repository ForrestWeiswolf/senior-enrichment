import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { updateStudent } from '../reducers/thunks'

class SingleStudent extends Component{
  constructor(props){
    super(props)
    console.log('props:', props)
    this.editMode = false
    this.nameHTML = (<h1>{props.student.name}</h1>)
    this.email = props.student.email
    this.campus = props.campus

    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeCampus = this.changeCampus.bind(this)
    this.editButton = this.editButton.bind(this)
  }

  componentWillReceiveProps(nextProps){
    console.log('nextprops:', nextProps)

    this.name = nextProps.student.name
    this.email = nextProps.student.email
    this.campus = nextProps.campus
  }

  changeName(event){
    this.name = event.target.value
  }

  changeEmail(event){
    this.email = event.target.value
    console.log(this.email)
  }

  changeCampus(event){
    this.campus = event.target.value
  }

  editButton(){
    this.editMode = ! this.editMode
  }

  render(){
    if(this.props.student){

      if(this.editMode){
        this.emailHTML = <input
          id='email'
          type='text'
          value={this.email}
          onChange={this.changeEmail}
        />
      } else {
        this.emailHTML = <p>{this.email}</p>
      }

      return (<div>
        <form>
        <h1>{this.name}</h1>
        {this.emailHTML}
        <p>
          A student at the <Link to={`/campuses/${this.campus.id}`}>{this.campus.name}</Link> campus
        </p>
        </form>
        <button onClick={this.editButton}>Edit</button>
      </div>)
    } else {
      return (<div></div>)
    }
  }
}

const mapState = (state, ownProps) => {
  const student = state.students.find( (s) => (s.id == ownProps.match.params.id)) || {} //using type coercion
  const campus = state.campuses.find( (c) => (c.id == student.campusId)) || {}
  console.log("student and campus", student, campus)
  return {
    student: student,
    campus: campus
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleStudent);

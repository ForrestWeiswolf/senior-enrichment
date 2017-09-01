import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

class SingleStudent extends Component{
  constructor(props){
    super(props)
    console.log('props:', props)
    // this.nameHTML = (<h1>{props.student.name}</h1>)
    // this.emailHTML = (<p>{props.student.email}</p>)
    // this.campusHTML = (<Link to={`/campuses/${props.campus.id}`}>{props.campus.name}</Link>)
  }

  componentWillReceiveProps(nextProps){
    console.log('nextprops:', nextProps)
    this.nameHTML = (<h1>{nextProps.student.name}</h1>)
    this.emailHTML = (<p>{nextProps.student.email}</p>)
    this.campusHTML = (<Link to={`/campuses/${nextProps.campus.id}`}>{nextProps.campus.name}</Link>)
  }


  render(){
    if(this.props.student){
      return (<div>
        {this.nameHTML}
        {this.emailHTML}
        <p>
          A student at the {this.campusHTML} campus
        </p>
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

import React from 'react';

import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

function SingleStudent(props){
  if(props.student){
    return (
    <div>
      <h1>{props.student.name}</h1>
      <p>{props.student.email}</p>
      <p>
        A student at the <Link to={`/campuses/${props.campus.id}`}>{props.campus.name}</Link> campus
      </p>
    </div>
  )
  } else {
    return (
    <div></div>
    )
  }
}

const mapState = (state, ownProps) => {
  const student = state.students.find( (s) => (s.id == ownProps.match.params.id)) || null
  const campus = state.campuses.find( (c) => (c.id == student.campusId)) || null
  return {
    student: student,
    campus: campus
  }
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleStudent);

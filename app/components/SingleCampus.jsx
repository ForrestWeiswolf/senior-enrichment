import React from 'react';

import Campus from './Campus'
import StudentList from './StudentList'

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function SingleCampus(props){
  return (
    <div>
      {props.campus ? <Campus campus={props.campus} /> : <div></div>}
      {props.students ? <StudentList students={props.students} /> : <div></div>}
    </div>
  )
}

const mapState = (state, ownProps) => {
  const campus = state.campuses.find( (c) => (c.id == ownProps.match.params.id) ) || null
  const students = state.students.filter( (s) => (s.campusId == ownProps.match.params.id))
  return {
    campus,
    students
  };
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleCampus);

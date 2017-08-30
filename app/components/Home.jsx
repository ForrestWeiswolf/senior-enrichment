import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function Home(props){
  return (
    <div className='page-header'>
      <h2>Margaret Hamilton Interplanetary Academy of JavaScript</h2>
      <h2><small>With {props.numStudents} students on {props.numCampuses} planets</small></h2>
    </div>
  )
}

const mapState = (state) => {
  return {
    numStudents: state.students.length,
    numCampuses: state.campuses.length
  };
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);

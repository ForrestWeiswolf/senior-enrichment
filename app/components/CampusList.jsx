import React from 'react';
import Campus from './Campus'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function CampusList(props){
  return (
    <div className="container-fluid row">
      {console.log("campusList props:", props)}
      {props.campuses.map( (campus) => <Campus campus={campus} key={campus.id} /> )}
    </div>
  )
}

const mapState = (state) => {
  console.log('state', state)
  return { campuses: state.campuses };
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);

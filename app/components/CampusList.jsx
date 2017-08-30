import React from 'react';
import Campus from './Campus'
import CreateCampus from './CreateCampus'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

function CampusList(props){
  return (
    <div>
      <p><Link to='/campuses/create' className='btn btn-default'> Create a new campus </Link> </p>
      <div className="container-fluid row">
        {props.campuses.map( (campus) => <Campus campus={campus} key={campus.id} /> )}
      </div>
    </div>
  )
}

const mapState = (state) => {
  return { campuses: state.campuses };
}
const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);

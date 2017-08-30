import React from 'react';
import { Link } from 'react-router-dom'

export default function Campus(props){
  return (
    <div className="col-md-4">
      <Link to={`/campuses/${props.campus.id}`}>
          <img src={props.campus.image} className="img-responsive img-rounded"></img>
          <h2>{props.campus.name}</h2>
      </Link>
    </div>
  )
}

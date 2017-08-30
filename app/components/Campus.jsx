import React from 'react';

export default function Campus(props){
  return (
    <div className="col-md-4">
      <a href={`/campuses/${props.campus.id}`}>
          <img src={props.campus.image} className="img-responsive img-rounded"></img>
          <h2>{props.campus.name}</h2>
      </a>
    </div>
  )
}

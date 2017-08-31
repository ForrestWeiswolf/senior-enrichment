import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import { removeStudent } from '../reducers/thunks'
import store from '../store'

export default function StudentList(props){
  return (
    <table className="table table-condensed table-hover">
    {console.log("studentList props:", props)}
    <tbody>
    {props.students.map(
      (student) => <tr key={student.id}>
        <th><Link to={`/students/${student.id}`}>{student.name}</Link></th>
        <th>{student.campusId}</th>
        <th>
          <button onClick={handleDelete(student.id)} className="btn btn-sm btn-danger">X</button>
        </th>
      </tr>
    )
    }
    </tbody>
    </table>
  )
}

function handleDelete(id){
  return (event) => store.dispatch(removeStudent(id)) //
}

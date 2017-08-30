import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

export default function StudentList(props){
  return (
    <table className="table table-condensed table-hover">
    {console.log("studentList props:", props)}
    <tbody>
    {props.students.map(
      (student) => <tr key={student.id}>
        <th>{student.name}</th>
        <th>{student.campusId}</th>
        <th><button className="btn btn-sm btn-danger">X</button></th>
      </tr>
    )
    }
    </tbody>
    </table>
  )
}

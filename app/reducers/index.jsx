import { combineReducers } from 'redux'
import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'

export function fetchStudents() {
  return (dispatch) => {
    axios.get('/api/users')
    .then( (response) => {
      return response
    })
    .then( (response) => dispatch(getStudents(response.data)))
    .catch( (err) => console.error('Could not get students data', err))
  }
}

function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}

const initialState = {
  students: []
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENTS:
      return {students: action.students}
    default: return state
  }
};

export default rootReducer

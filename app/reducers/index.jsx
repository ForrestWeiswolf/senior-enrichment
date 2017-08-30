import { combineReducers } from 'redux'
import axios from 'axios'

const initialState = {
  students: [],
  campuses: []
}

const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'

//thuncks:

export function fetchCampuses() {
  return (dispatch) => {
    axios.get('/api/campuses')
    .then( (response) => dispatch(getCampuses(response.data)))
    .catch( (err) => console.error('Could not get campuses data', err))
  }
}

export function fetchStudents() {
  return (dispatch) => {
    axios.get('/api/users')
    .then( (response) => dispatch(getStudents(response.data)))
    .catch( (err) => console.error('Could not get students data', err))
  }
}

//action creators:

function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}

function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENTS:
      return Object.assign({}, state, {students: action.students})
    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses})
    default: return state
  }
};

export default rootReducer

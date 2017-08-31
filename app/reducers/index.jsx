import { combineReducers } from 'redux'
import axios from 'axios'

const initialState = {
  students: [],
  campuses: []
}

const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS'

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

export function postCampus(data) {
  console.log('POSTcAMPUS THUNK CREATOR', data)
  return (dispatch) => {
    axios.post('/api/campuses', data)
    .then( (response) => dispatch(getNewCampus(response.data)))
    .catch( (err) => console.error('Could not post campus', err))
  }
}

//action creators:

function getNewCampus(campus) {
  console.log('getNewCampus', campus)
  return {
    type: GET_NEW_CAMPUS,
    campus: campus
  }
}

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
    case GET_NEW_CAMPUS:
      const newState = Object.assign({}, state)
      newState.campuses.push(action.campus)
      return newState
    default: return state
  }
};

export default rootReducer

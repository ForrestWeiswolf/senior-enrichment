import { combineReducers } from 'redux'

const initialState = {
  students: [],
  campuses: []
}

const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS'

//action creators:

export function getNewCampus(campus) {
  console.log('getNewCampus', campus)
  return {
    type: GET_NEW_CAMPUS,
    campus: campus
  }
}

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students: students
  }
}

export function getCampuses(campuses) {
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

import { combineReducers } from 'redux'

const initialState = {
  students: [],
  campuses: []
}

const GET_STUDENTS = 'GET_STUDENTS'
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const DELETE_STUDENT = 'DELETE_STUDENT'

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

export function deleteCampus(campusId) {
  return {
    type: DELETE_CAMPUS,
    campusId: campusId
  }
}

export function deleteStudent(studentId) {
  return {
    type: DELETE_STUDENT,
    studentId: studentId
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
    case DELETE_CAMPUS:
      return Object.assign({}, state, {campuses: state.campuses.filter((campus) => {
        return campus.id !== action.campusId
      })})
    case DELETE_STUDENT:
      const students = state.students.filter((student) => {
        return student.id !== action.studentId
      })
      console.log(students)
      return Object.assign({}, state, {students})
    default: return state
  }
};

export default rootReducer

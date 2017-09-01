import axios from 'axios'
import { getNewCampus, getNewStudent, getStudents, getCampuses, deleteCampus, deleteStudent} from './index'

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
  return (dispatch) => {
    axios.post('/api/campuses', data)
    .then( (response) => dispatch(getNewCampus(response.data)))
    .catch( (err) => console.error('Could not post campus', err))
  }
}

export function postStudent(data) {
  return (dispatch) => {
    axios.post('/api/users', data)
    .then( (response) => dispatch(getNewStudent(response.data)))
    .catch( (err) => console.error('Could not post student', err))
  }
}

export function updateStudent(id, data) {
  let res;
  return (dispatch) => {
    axios.post(`/api/users/${id}`, data)
    .then( (response) => {
      res = response
      dispatch(deleteStudent(id))
    })
    .then( (response) => dispatch(getNewStudent(res)))
    .catch( (err) => console.error('Could not post student', err))
  }
}

export function removeCampus(id) {
  return (dispatch) => {
    axios.delete(`/api/campuses/${id}`)
    .then( () => dispatch(deleteCampus(id)))
    .catch( (err) => console.error('Error when deleting campus', err))
  }
}

export function removeStudent(id) {
  return (dispatch) => {
    axios.delete(`/api/users/${id}`)
    .then( () => dispatch(deleteStudent(id)))
    .catch( (err) => console.error('Error when deleting student', err))
  }
}

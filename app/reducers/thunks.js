import axios from 'axios'
import { getNewCampus, getStudents, getCampuses } from './index'

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

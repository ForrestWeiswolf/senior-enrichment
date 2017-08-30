import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'
import CampusList from './CampusList'
import StudentList from './StudentList'
import Home from './Home'
import { fetchStudents, fetchCampuses } from '../reducers'
import { connect } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'

class Root extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.fetchData()
  }

  render() {
    return (
      <BrowserRouter>
      <div id='app' className='container'>
        <Navbar />
        <Route path="/" exact={true} component={Home} />
        <Route path="/campuses" component={CampusList} />
        <Route path="/students" component={StudentList} />
      </div>
      </BrowserRouter>
    )
  }
}

const mapProps = null;

const mapDispatch = (dispatch) => ({
  fetchData: () => {
    console.log("about to dispatch fetch")
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Root);

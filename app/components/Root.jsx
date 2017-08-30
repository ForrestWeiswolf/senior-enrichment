import React, { Component } from 'react'
import { Route, BrowserRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import Navbar from './Navbar'
import CampusList from './CampusList'
import StudentList from './StudentList'
import Home from './Home'
import SingleCampus from './SingleCampus'

import { fetchStudents, fetchCampuses } from '../reducers'

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
        <Route path="/campuses" exact={true} component={CampusList} />
        <Route path="/campuses/:id" component={SingleCampus} />
        <Route path="/students" render={() =>  <StudentList students={this.props.students}/>} />
      </div>
      </BrowserRouter>
    )
  }
}

const mapProps = (state) => state;

const mapDispatch = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  }
});

export default connect(mapProps, mapDispatch)(Root);

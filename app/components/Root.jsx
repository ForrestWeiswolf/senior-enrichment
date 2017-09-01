import React, { Component } from 'react'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import { connect } from 'react-redux';

import Navbar from './Navbar'
import CampusList from './CampusList'
import StudentList from './StudentList'
import Home from './Home'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'
import CreateCampus from './CreateCampus'
import CreateStudent from './CreateStudent'
import EditStudent from './EditStudent'

import { fetchStudents, fetchCampuses } from '../reducers/thunks'

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

        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/campuses/create" render={ () => {
            return (<div>
              <CreateCampus />
              <CampusList />
            </div>)
          }} />

          <Route path="/campuses/:id" component={SingleCampus} />

          <Route path="/campuses" component={CampusList} />

          <Route
            path="/students"
            exact={true}
            render={() =>  (
              <div>
                <CreateStudent />
                <StudentList students={this.props.students}/>
              </div>
            )}
          />

          <Route path="/students/:id/edit" component={EditStudent} />

          <Route path="/students/:id" component={SingleStudent} />
        </Switch>
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

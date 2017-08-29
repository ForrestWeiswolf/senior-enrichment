import React from 'react';
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import CampusList from './CampusList'
import StudentList from './StudentList'

export default function Root(){
  return (
    <div id='app' className='container'>
      <Navbar />
      <Route path="/" exact={true} component={CampusList} />
      <Route path="/campuses" component={CampusList} />
      <Route path="/students" component={StudentList} />
    </div>
  )
}

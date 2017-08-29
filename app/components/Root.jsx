import React from 'react';
// import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import CampusList from './CampusList'

export default function Root(){
  return (
    <div id='app' className='container'>
      <Navbar />
      <CampusList />
    </div>
  )
}

import React from 'react';

export default function Navbar(props){
  return (
     <nav className="navbar navbar-static-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><a href="#/">Home</a></li>
            <li><a href="#/campuses">Campuses</a></li>
            <li><a href="#/students">Students</a></li>
          </ul>
        </div>
     </nav>
  )
}
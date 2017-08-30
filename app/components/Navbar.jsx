import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(props){
  return (
     <nav className="navbar navbar-static-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/campuses">Campuses</Link></li>
            <li><Link to="/students">Students</Link></li>
          </ul>
        </div>
     </nav>
  )
}

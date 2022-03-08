import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

 

  


  return (
    <nav  style={props.animation} className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> 
        
      </ul>
     {/* <div className="color-pallates mx-4">
        <div className="blue circle mx-1"></div>
        <div className="red circle mx-1"></div>
        <div className="green circle mx-1"></div>
        <div className="yellow circle mx-1"></div>
      </div> */}
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light' ?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">{props.mode === 'light'?'Enable':'Disable'} Dark mode</label>
</div>
    </div>
  </div>
</nav>

  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Hello World',
  aboutText: 'Ok goo'
}
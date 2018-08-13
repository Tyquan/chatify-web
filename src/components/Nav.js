import React from 'react';
import {
  Link
} from 'react-router-dom';

//import logo from '../images/xo.jpg';

export default () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">X-O Free</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    	    <ul className="navbar-nav mr-auto">
    	      <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link> <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/signup">Signup</Link> <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item active">
    	        <Link className="nav-link" to="/login">Login</Link> <span className="sr-only">(current)</span>
    	      </li>
    	      <li className="nav-item">
    	        <Link className="nav-link" to="/about">Features</Link>
    	      </li>
    	    </ul>
  	    </div>
      </div>
    </nav>
  </div>
);
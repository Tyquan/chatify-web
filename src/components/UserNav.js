import React from 'react';
import {
  Link,
  Route, 
  Redirect 
} from 'react-router-dom';

export default () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">WhatsVi</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item active">
	        <Link className="nav-link" to="/user/chat">Chat</Link> <span className="sr-only">(current)</span>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/user/contacts">Contacts</Link>
	      </li>
	    </ul>
	  </div>
    </nav>
  </div>
);
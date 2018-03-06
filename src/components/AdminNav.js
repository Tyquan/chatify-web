import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/admin/dashboard">WhatsVi - Admin</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/admin/dashboard">Dashboard</Link> <span className="sr-only">(current)</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/groups">Groups</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/messages">Messages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
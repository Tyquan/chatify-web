import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from './HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
//import AvailablePage from './AvailablePage';
import AboutPage from './AboutPage';


// Admin
import AdminDashboardPage from './admin/Dashboard';
import UsersPage from './admin/Users';
import GroupsPage from './admin/Groups';
import MessagesPage from './admin/Messages';
import SettingsPage from './admin/Settings';

// User
import UserChatPage from './user/Chat';
import ContactPage from './user/contact/ContactPage';
import AddContactPage from './user/contact/AddContactPage';
import ShowContactPage from './user/contact/ShowContactPage';
import EditContactPage from './user/contact/EditContactPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <PublicRoute 
        path="/" 
        exact={true} 
        component={HomePage}
      />
      <PublicRoute 
        path="/login" 
        exact={true} 
        component={LoginPage}
      />
      <PublicRoute 
        path="/signup" 
        exact={true} 
        component={SignupPage}
      />
      <PublicRoute 
        path="/about" 
        exact={true}
        component={AboutPage} 
      />
      <PublicRoute
        path="/admin/dashboard" 
        exact={true} 
        component={AdminDashboardPage} 
      />
      <PublicRoute
        path="/users" 
        exact={true} 
        component={UsersPage} 
      />
      <PublicRoute
        path="/admin/groups" 
        exact={true} 
        component={GroupsPage}
      />
      <PublicRoute
        path="/admin/messages" 
        exact={true} 
        component={MessagesPage}
      />
      <PublicRoute
        path="/admin/settings" 
        exact={true} 
        component={SettingsPage}
      />
      <PublicRoute
        path="/user/chat" 
        exact={true} 
        component={UserChatPage}
      />
      <PublicRoute
        path="/user/contacts" 
        exact={true} 
        component={ContactPage}
      />
      <PublicRoute
        path="/user/addContacts" 
        exact={true} 
        component={AddContactPage}
      />
      <PublicRoute
        path="/user/contact/:id"
        exact={true}
        component={ShowContactPage}
      />
      <PublicRoute
        path="/user/contact/edit/:id"
        exact={true}
        component={EditContactPage}
      />
    </Switch>
  </Router>
);
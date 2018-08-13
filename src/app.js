import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import './index.css';
import App, { history } from './routes/index';
import configureStore from './store/configureStore';
import { startSetContacts } from './actions/contacts';
import { login, logout } from './actions/auth';
import getVisibleContacts from './selectors/contacts';
import 'normalize.css/normalize.css';
//import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';
//import firebase from 'firebase';
import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
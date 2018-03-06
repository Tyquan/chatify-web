import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from '../reducers/contacts';
import contactFiltersReducer from '../reducers/contactFilters';
import groupsReducer from '../reducers/groups';
import groupFiltersReducer from '../reducers/groupFilters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			contacts: contactsReducer,
			contactFilters: contactFiltersReducer,
			groups: groupsReducer,
			groupFilters: groupFiltersReducer,
			auth: authReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
}
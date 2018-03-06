const contactFiltersReducerDefaultState = {
	name: '',
	sortBy: 'name'
};

const conatctFiltersReducer = (state = contactFiltersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_NAME_FILTER':
			return {
				...state,
				name: action.name
			};
		case 'SORT_BY_NAME':
			return {
				...state,
				sortBy: 'name'
			};
		default:
			return state;
	}
};

export default conatctFiltersReducer;
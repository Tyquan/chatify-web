const groupsReducerDefaultState = [];
const groupsReducer = (state = groupsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_GROUP':
			return [
				...state,
				action.group
			];
		case 'EDIT_GROUP':
			return state.map((group) => {
				if (group.id === action.id) {
					return {
						...group,
						...action.updates
					};
				} else {
					return group;
				}
			});
		case 'REMOVE_GROUP':
			return state.filter(({ id }) => {
				return id !== action.id;
			});
		case 'SET_GROUPS':
      		return action.groups;
		default:
			return state;
	}
};

export default groupsReducer;
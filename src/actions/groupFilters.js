export const setNameFilter = (name = '') => ({
	type: 'SET_NAME_FILTER',
	name
});

export const sortByName = () => ({
	type: 'SORT_BY_NAME'
});
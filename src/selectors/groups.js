export default (groups, { name, sortBy }) => {
	return groups.filter((group) => {
		//const createdAtMoment = moment(contact.createdAt);
		const textMatch = group.name.toLowerCase().includes(name.toLowerCase());

		return textMatch;
		// sorting below
	}).sort((a, b) => {
		if (sortBy === 'name') {
			return a.name < b.name ? 1 : -1; // greater amount comes first
		} else if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1; // a comes first
		} else {
			return a.name < b.name ? 1 : -1;
		}
	});
};
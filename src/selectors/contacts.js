export default (contacts, { name, sortBy }) => {
	return contacts.filter((contact) => {
		//const createdAtMoment = moment(contact.createdAt);
		const textMatch = contact.name.toLowerCase().includes(name.toLowerCase());

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
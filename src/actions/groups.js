import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addGroup = (group) => ({
  type: 'ADD_GROUP',
  group
});

export const startAddGroup = (contactData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      	name = '',
        description = '' ,
        memberOne = '' ,
        memberTwo = '' ,
        memberThree = '' ,
		    createdAt = 0
    } = contactData;
    const group = { 
    	id: uuid(),
		  name,
      description,
      memberOne,
      memberTwo,
      memberThree, 
	};
    return database.ref(`users/${uid}/groups`).push(group).then((ref) => {
      dispatch(addGroup({
        id: ref.key,
        ...group
      }));
    });
  };
};


export const removeGroup = ({ id } = {}) => ({
	type: 'REMOVE_GROUP',
	id
});

export const startRemoveGroup = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/groups/${id}`).remove().then(() => {
      dispatch(removeGroup({ id }));
    });
  };
};

export const editGroup = (id, updates) => ({
	type: 'EDIT_GROUP',
	id,
	updates
});

export const startEditGroup = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/groups/${id}`).update(updates).then(() => {
      dispatch(editGroup(id, updates));
    });
  };
};

// SET_CONTACTS
export const setGroups = (groups) => ({
  type: 'SET_GROUPS',
  groups
});

export const startSetGroups = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/groups`).once('value').then((snapshot) => {
      const groups = [];

      snapshot.forEach((childSnapshot) => {
        groups.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setGroups(groups));
    });
  };
};
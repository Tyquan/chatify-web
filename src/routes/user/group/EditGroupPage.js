import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupForm from '../../../components/Contacts/ContactForm';
import { editGroup, removeGroup } from '../../../actions/contacts';
import UserFooter from '../../../components/UserFooter';

export class EditGroupPage extends Component {
	// constructor(props){
	// 	super(props);
	// }
	onSubmit = (group) => {
		this.props.editGroup(this.props.group.id, group);
		this.props.history.push('/user/groups');
	}
	onRemove = () => {
		this.props.removeGroup({
			id: this.props.group.id 
		});
		// redirect to the dashboard
		this.props.history.push('/user/groups');
	}
	render() {
		return (
			<div>
				<GroupForm
					contact={this.props.group}
					onSubmit={this.onSubmit}
				/>
				<button
					className="btn btn-danger"
					onClick={this.onRemove}
				>
					Delete Group
				</button>
				<UserFooter />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	contact: state.groups.find((group) => {
		return group.id === props.match.params.id;
	})
};

const mapDispatchToProps = (dispatch, props) => ({
	editGroup: (id, group) => dispatch(editGroup(id, group)),
	removeGroup: (data) => dispatch(removeGroup(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupPage);



// export class EditContactPage extends React.Component {
//   onSubmit = (contact) => {
//     this.props.editContact(this.props.contact.id, contact);
//     this.props.history.push('/');
//   };
//   onRemove = () => {
//     this.props.removeContact({ id: this.props.contact.id });
//     this.props.history.push('/');
//   };
//   render() {
//     return (
//       <div>
//         <ContactForm
//           contact={this.props.contact}
//           onSubmit={this.onSubmit}
//         />
//         <button onClick={this.onRemove}>Remove</button>
//       </div>
//     );
//   }
// };

// const mapStateToProps = (state, props) => ({
//   contact: state.contacts.find((contact) => contact.id === props.match.params.id)
// });

// const mapDispatchToProps = (dispatch, props) => ({
//   editContact: (id, contact) => dispatch(editContact(id, contact)),
//   removeContact: (data) => dispatch(removeContact(data))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EditContactPage);












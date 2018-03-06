import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../../components/Contacts/ContactForm';
import { editContact, removeContact } from '../../../actions/contacts';
import UserFooter from '../../../components/UserFooter';


export class EditContactPage extends Component {
	// constructor(props){
	// 	super(props);
	// }
	onSubmit = (contact) => {
		this.props.editContact(this.props.contact.id, contact);
		this.props.history.push('/user/contacts');
	}
	onRemove = () => {
		this.props.removeContact({
			id: this.props.contact.id 
		});
		// redirect to the dashboard
		this.props.history.push('/user/contacts');
	}
	render() {
		return (
			<div>
				<ContactForm
					contact={this.props.contact}
					onSubmit={this.onSubmit}
				/>
				<button
					className="btn btn-danger"
					onClick={this.onRemove}
				>
					Delete Contact
				</button>
				<UserFooter />
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	contact: state.contacts.find((contact) => {
		return contact.id === props.match.params.id;
	})
};

const mapDispatchToProps = (dispatch, props) => ({
	editContact: (id, contact) => dispatch(editContact(id, contact)),
	removeContact: (data) => dispatch(removeContact(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContactPage);



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












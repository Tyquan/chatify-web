import React from 'react';
import { connect } from 'react-redux';
import UserNav from '../../../components/UserNav';
import ContactForm from '../../../components/Contacts/ContactForm';
import { addContact } from '../../../actions/contacts';
import UserFooter from '../../../components/UserFooter';

export class AddContactPage extends React.Component {
  onSubmit = (contact) => {
    this.props.addContact(contact);
    this.props.history.push('/user/contacts');
  };
  render() {
    return (
      <div>
        <UserNav />
        <br />
        <h1>Add Contact</h1>
        <ContactForm
          onSubmit={this.onSubmit}
        />
        <UserFooter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact))
});

export default connect(undefined, mapDispatchToProps)(AddContactPage);
import React from 'react';
import { connect } from 'react-redux';
import UserNav from '../../../components/UserNav';
import GroupForm from '../../../components/Groups/GroupForm';
import { addGroup } from '../../../actions/groups';
import UserFooter from '../../../components/UserFooter';

export class AddGroupPage extends React.Component {
  onSubmit = (group) => {
    this.props.addGroup(group);
    this.props.history.push('/user/groups');
  };
  render() {
    return (
      <div>
        <UserNav />
        <br />
        <div className="container">
          <h1>Add Group</h1>
          <GroupForm
            onSubmit={this.onSubmit}
          />
        </div>
        <UserFooter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGroup: (group) => dispatch(addGroup(group))
});

export default connect(undefined, mapDispatchToProps)(AddGroupPage);
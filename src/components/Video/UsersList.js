import React from 'react';

class UsersList extends React.Component {
  render () {
    var users = this.props.users.map(function (user) {
      return <div className="chat-user">{user}</div>;
    });
    return (
      <div className="users-list col-xs-3">
        {users}
      </div>
    );
  }
}
import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: 'Morgan', mail: 'morgancitoelperro@gmail.com' },
        { name: 'Milo', mail: 'mililuli@gmail.com' },
        { name: 'Negro', mail: 'perronegrooficial@gmail.com' },
      ]
    }
  }
  render() {
    return (
      <User users={this.state.users}/>
    );
  }
}

export default Users;
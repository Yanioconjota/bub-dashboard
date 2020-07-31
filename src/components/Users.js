import React, { Component } from 'react';
import User from './User';
import LastUser from './LastUser';

class Users extends Component {
  
  constructor() {
    super();
    this.state = {
      users: [],
      lastUser: {}
    }
  }

  apiCall(url, handler) {
    fetch(url)
      .then( response => response.json())
      .then(response => handler(response))
      .catch(err => console.log(err))
  }

  showUser = (response) => {
    console.log(response);
    
    this.setState({
      users: response.data,
      lastUser: response.meta.lastAdded
    });
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.apiCall('http://localhost:5555/api/users/', this.showUser);
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }

  render() {
    return (
      <div>
        <User users={this.state.users} />
        <LastUser lastUser={this.state.lastUser} />
      </div>
    );
  }
}

export default Users;

// let lastUser = Math.max.apply(Math, response.data.map(function (o) { return o.id; }));
// let finalUser = users.find(function (user) {
//   return user.id == lastUser
// });
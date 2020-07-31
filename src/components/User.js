import React from 'react';

let User = ({users}) => {
  return (
    <div className="card col">
      <p>Cantidad total de usuarios en DB: {users.length}</p>
      <hr/>
      <ul className="list-unstyled">
      {
        users.map((user, i)=>(
          <li key={i}><small>{user.name} {user.lastname}</small></li>
        ))
      }
      </ul>
    </div>
  );
}

export default User;
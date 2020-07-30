import React from 'react';

let User = ({users}) => {
  return (
    <div>
      <h3>Lista de usuarios: </h3>
      <ul className="list-unstyled">
        {users.map((user, i) => (
          <li key={i} className="my-3 p-3">
            <p>
              <strong>nombre:</strong> {user.name}
            </p>
            <p>
              <strong>mail:</strong> {user.mail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
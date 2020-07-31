import React from 'react';

let User = ({users}) => {
  return (
    <div>
      <h1></h1>
      <h3>Lista de usuarios: </h3>
      <h5>Cantidad total de usuarios en DB: {users.length}</h5>
      <ul className="list-unstyled">
        {users.map((user, i) => (
          <li key={i} className="my-3 p-3">
            <p>
              <strong> id: </strong> {user.id}
            </p>
            <p>
              <strong> nombre: </strong> {user.name} {user.lastname}
            </p>
            <p>
              <strong>mail:</strong> {user.email}
            </p>
            <p>
              <strong>endpoint:</strong> {user.endpoint}
            </p>
            <img src={user.image} alt="" className="w-50" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
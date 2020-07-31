import React from 'react';

let LastUser = ({lastUser}) => {
  return (
    <div>
      <h1></h1>
      <h3>Último usuario agregado: </h3>
      <ul className="list-unstyled">
        <li className="my-3 p-3">
          <p>
            <strong> id: </strong> {lastUser.id}
          </p>
          <p>
            <strong> nombre: </strong> {lastUser.name} {lastUser.lastname}
          </p>
          <p>
            <strong>mail:</strong> {lastUser.email}
          </p>
          <p>
            <strong>endpoint:</strong> {lastUser.endpoint}
          </p>
          <img src={lastUser.image} alt="" className="w-50" />
        </li>
      </ul>
    </div>
  );
}

export default LastUser;
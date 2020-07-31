import React from 'react';

let LastUser = ({lastUser}) => {
  return (
    <div className="card col">
      <p>Último usuario agregado</p>
      <hr/>
      <div className="user-container">
        <div className="img-wrapper" style={{backgroundImage: 'url('+ lastUser.image + ')'}}>
        </div>
        <div className="data">
          <p>
            <small><strong> id: </strong> {lastUser.id}</small>
          </p>
          <p>
            <small><strong> nombre: </strong> {lastUser.name} {lastUser.lastname}</small>
          </p>
          <p>
            <small><strong>mail:</strong> {lastUser.email}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LastUser;
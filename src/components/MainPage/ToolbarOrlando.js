import React from 'react';
import lupa from '../../imgs/icone-loupe-gris.png';
import campana from '../../imgs/77682.png';
import "./ToolbarOrlando.css";
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

export const ToolbarOrlando = () => {

  const { formState } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="busqueda">
        <input placeholder="User Search..." className="userSearch" />
        <img className="lupa" src={lupa} alt="lupa" />
      </div>
      <div className="usuario">
        <img
          className="PerfilImg"
          src="https://avatars.githubusercontent.com/u/37028687?v=4"
          alt=""
        />
        <span className='userLogged'>{`${formState.firstName} ${formState.lastName}`}</span>
        <img className="campana" src={campana} alt="campana" />
      </div>
    </div>
  )
}


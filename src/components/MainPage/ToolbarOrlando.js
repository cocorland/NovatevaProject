import React from 'react';
import lupa from '../../imgs/icone-loupe-gris.png';
import "./ToolbarOrlando.css";

export const ToolbarOrlando = () => {
  return (
    <div className="navbar">
      <div className="busqueda">
        <input placeholder="User Search..." className="userSearch" />
        <img className="lupa" src={lupa} alt="lupa" />
      </div>
      <div className="usuario">
        <img className="lupa" src={lupa} alt="lupa" />
      </div>
    </div>
  )
}


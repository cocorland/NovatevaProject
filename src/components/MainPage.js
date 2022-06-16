import React, { useContext } from 'react';
import "./MainPage.css";
import { ToolbarOrlando } from './MainPage/ToolbarOrlando';
import { ChatColumn } from './MainPage/ChatColumn';
import { ChatBox } from './MainPage/ChatBox';
import { Logout } from './MainPage/Logout'
import { UserContext } from '../context/UserContext';

export const MainPage = () => {

  const { hola, user } = useContext( UserContext );
  console.log( hola, user );

  return (
    <>
      <ToolbarOrlando />
      <div className="AccionesPrincipales">
        <div className="Rectangulo">
          <div className="columnaIzquierda">
            <ChatColumn />
          </div>
          <Logout />
        </div>
        <div className="columnaDerecha">
          <ChatBox />
        </div>
      </div>
    </>
  )
}

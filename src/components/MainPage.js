import React from 'react';
import "./MainPage.css";
import { ToolbarOrlando } from './MainPage/ToolbarOrlando';
import { ChatColumn } from './MainPage/ChatColumn';
import { ChatBox } from './MainPage/ChatBox';
import { Logout } from './MainPage/Logout'

export const MainPage = () => {
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

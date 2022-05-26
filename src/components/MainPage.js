import React from 'react';
import { ToolbarOrlando } from './MainPage/ToolbarOrlando';
import { ChatColumn } from './MainPage/ChatColumn';
import { ChatBox } from './MainPage/ChatBox';
import { Logout } from './MainPage/Logout'

/* import { ChatMenu } from './MainPage/ChatMenu';
import { Mensaje } from './mensajes/Mensaje';
import { CajaDeChat } from './MainPage/CajaDeChat';
import { ChatOnline } from "./chatOnline/ChatOnline"; */
import "./MainPage.css";
/* import { Sidebar } from './MainPage/Sidebar';
import { Contactsbar } from './MainPage/Contactsbar'; */


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

      {/* <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <ChatMenu />
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className="chatBoxTop">
              <Mensaje />
              <Mensaje own={ true }/>
              <Mensaje />
              <Mensaje own={ true }/>
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
            </div>
            <CajaDeChat />
          </div>
        </div>
      </div> */}
    </>
  )
}

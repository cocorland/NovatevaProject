import React from 'react';
import { ToolbarComponent } from './MainPage/Toolbar';
import { ChatMenu } from './MainPage/ChatMenu';
import { Mensaje } from './mensajes/Mensaje';
import { CajaDeChat } from './MainPage/CajaDeChat';
import { ChatOnline } from "./chatOnline/ChatOnline";
import "./MainPage.css";
/* import { Sidebar } from './MainPage/Sidebar';
import { Contactsbar } from './MainPage/Contactsbar'; */


export const MainPage = () => {
  return (
    <>
      <ToolbarComponent />
      <div className='messenger'>
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
      </div>
    </>
  )
}

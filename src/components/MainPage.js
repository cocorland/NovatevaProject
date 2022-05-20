import React from 'react';
import { ToolbarComponent } from './MainPage/Toolbar';
import { ChatMenu } from './MainPage/ChatMenu';
import { Mensaje } from './mensajes/Mensaje';
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
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className="chatBoxTop">
              <Mensaje />
              <Mensaje />
              <Mensaje />
              <Mensaje />
            </div>
            <div className="chatBoxBottom"></div>
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>
            online
          </div>
        </div>
      </div>
    </>
  )
}

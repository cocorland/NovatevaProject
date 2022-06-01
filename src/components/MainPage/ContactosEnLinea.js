import React from 'react';
import { ChatOnline } from '../chatOnline/ChatOnline'
import './ContactosEnLinea.css';

export const ContactosEnLinea = () => {
  return (
    <div className="ColumnaContactosEnLinea">
      <div className='Perfil'>
        <div className="ImagenContactoOnline">
          {/* <div className="chatOnlineBadge"></div> */}
          <img
            className="ConversacionImg"
            src="https://avatars.githubusercontent.com/u/37028687?v=4"
            alt=""
          />
        </div>
        <div className="UsuarioConexion">
          <span className="nombreConversacion">Orlando Chaparro</span>
          <span className="conexionActual">Online</span>
        </div>
      </div>
      <hr />
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />                                 
          <ChatOnline />

        </div>
        <button className="NewChatButton">New Chat</button>
      </div>
    </div>
  )
}

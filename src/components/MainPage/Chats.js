import React from 'react';
import { Message } from '../mensajeNovateva/Message';
import './Chats.css';


export const Chats = () => {
  return (
    <div className="chatBoxColumn">
      <div className="chatBoxWrapper">
        <Message />
        <Message own={ true }/>
      </div>
      <div className="chatBoxBottom">
        <textarea className="chatMessageInput" placeholder='Start typing here'></textarea>
        <button className="chatSubmitButton">SEND</button>
      </div>
    </div>
  )
}

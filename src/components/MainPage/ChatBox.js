import React from 'react';
import { ContactosEnLinea } from './ContactosEnLinea'
import { Chats } from './Chats';
import "./ChatBox.css";

export const ChatBox = () => {
  return (
    <div className="chatBox">
        <ContactosEnLinea />
        <Chats />
    </div>
  )
}

import React from 'react';
import { Message } from '../mensajeNovateva/Message'

export const Chats = () => {
  return (
    <div className="chatBoxColumn">
      <div className="chatBoxWrapper">
        <Message />
      </div>
      <div className="chatBoxBottom">Type a message..</div>
    </div>
  )
}

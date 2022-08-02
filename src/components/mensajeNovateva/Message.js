import React from 'react';
import './Message.css';

export const Message = ({ name, own, message }) => {

  console.log("El mensaje es: ", message);
  
  return (
    <>
      <div className={ own ? "Message own" : "Message" }>
        <div className={ own ? "MessageOwnerHour own" : "MessageOwnerHour" }>
          {`${name}, ${message.createdAt}`}
        </div>
        <div className={ own ? "MessageText own" : "MessageText"}>
          { message.message.messageText }
        </div>
      </div>
    </>
  )
}

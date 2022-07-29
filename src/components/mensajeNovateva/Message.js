import React from 'react';
import './Message.css';

export const Message = ({ own, mensaje }) => {

  console.log("El mensaje es: ", mensaje);
  
  return (
    <>
      <div className={ own ? "Message own" : "Message" }>
        <div className={ own ? "MessageOwnerHour own" : "MessageOwnerHour" }>
          Orlando, 10:22
        </div>
        <div className={ own ? "MessageText own" : "MessageText"}>
          { mensaje.messageText }
        </div>
      </div>
    </>
  )
}

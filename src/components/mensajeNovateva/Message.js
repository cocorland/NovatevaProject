import React from 'react';
import './Message.css';

export const Message = ({own}) => {
  return (
    <>
      <div className={ own ? "Message own" : "Message" }>
        <div className={ own ? "MessageOwnerHour own" : "MessageOwnerHour" }>
          Orlando, 10:22
        </div>
        <div className={ own ? "MessageText own" : "MessageText"}>
          Hola
        </div>
      </div>
    </>
  )
}

import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Message } from '../mensajeNovateva/Message';
import './Chats.css';

/* mensajes */

export const Chats = () => {

  const { formState, setFormState } = useContext(UserContext);

  return (
    <div className="chatBoxColumn">
      <div className="chatBoxWrapper">
        {formState.mensajes ?
          formState.mensajes.map
            (
              (mensaje) =>
                <Message
                  own={true}
                  mensaje={mensaje.message}
                  key={mensaje._id}
                />
            )
          : <></>}

        {/* <Message />
        <Message />
        <Message own={true} /> */}

      </div>
      <div className="chatBoxBottom">
        <textarea className="chatMessageInput" placeholder='Start typing here'></textarea>
        <button className="chatSubmitButton">SEND</button>
      </div>
    </div>
  )
}

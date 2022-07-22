import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { ChatOnline } from '../chatOnline/ChatOnline';
import mate from '../../imgs/mate.png';
import './ContactosEnLinea.css';

export const ContactosEnLinea = () => {

  const { formState } = useContext( UserContext );
  console.log( formState );

  const url_name = 'https://novateva-codetest.herokuapp.com/users';
  const [contactos, setContactos] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await fetch(url_name)
      console.log(response.status)
      const responseJSON = await response.json()
      const { users } = responseJSON
      setContactos(users)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="ColumnaContactosEnLinea">
      <div className='Perfil'>
        <div className="ImagenContactoOnline">
          <img
            className="ConversacionImg"
            src={mate}
            alt=""
          />
        </div>
        <div className="UsuarioConexion">
          <span className="nombreConversacion">{`${formState.firstName} ${formState.lastName}`}</span>
          <span className="conexionActual">Online</span>
        </div>
      </div>
      <hr />
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          {contactos.map
            ((contacto) =>
              <ChatOnline
                nombre={contacto.firstName}
                apellido={contacto.lastName}
                llave={contacto._id}
                key={contacto._id}
              />
            )
          }
        </div>
        <button className="NewChatButton">New Chat</button>
      </div>
    </div>
  )
}

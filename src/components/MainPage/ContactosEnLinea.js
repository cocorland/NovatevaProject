import React, { useEffect, useState } from 'react';
import { ChatOnline } from '../chatOnline/ChatOnline';
import './ContactosEnLinea.css';

export const ContactosEnLinea = () => {

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
          {contactos.map
            ((contacto) =>
              <ChatOnline
                nombre={contacto.firstName}
                apellido={contacto.lastName}
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

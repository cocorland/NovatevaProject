import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import rayo from '../../imgs/rayo.png';
import './ChatOnline.css';

export const ChatOnline = ({ nombre, apellido, llave }) => {

  const { formState, setFormState } = useContext(UserContext);
  const { id, token } = formState

  const handleClickChat = (e, llave) => {
    e.preventDefault();

    console.log("El id del usuario es: ", llave);

    const initiateUserChat = async (token, ID, friendID) => {
      try {
        await axios.post('https://novateva-codetest.herokuapp.com/room/initiate',
          {
            'userIds': [ID, friendID],
            'type': 'consumer-to-consumer'
          },
          {
            headers: {
              'authorization': 'Bearer ' + token
            }
          })
          .then(res => {

            console.log("La respuesta es: ", res);
          })
      } catch (error) {
        console.log(error);
      }
    }
    /* Vamos a cablear el chat para que hablemos con Lorenzo Pachioli */
    initiateUserChat(token, id, llave);
  }

  return (
    <div className="chatOnline" onClick={ (e) => handleClickChat(e, llave) }>
      <div className="chatOnlineFriend">
        <div className="PhotoAndName">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={rayo}
              /* src="https://noticias.coches.com/wp-content/uploads/2011/10/cars.jpg" */
              /* src="https://source.unsplash.com/random" */
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <div className="nombreConexion">
            <span className="chatOnlineName">{`${nombre} ${apellido}`}</span>
            <span className="Conexion">Online</span>
          </div>
        </div>
        <div className="typingAndNoLeidos">
          <span className="typing">typing...</span>
          <p className="mensajesNoLeidos">15</p>
        </div>
      </div>
    </div>
  )
}

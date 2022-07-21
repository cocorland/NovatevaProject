import "./ChatOnline.css";
import React from "react";

export const ChatOnline = ({ nombre, apellido }) => {

  const handleClickChat = (e) => {
    e.preventDefault();
    console.log("Maldita sea");
  }

  return (
    <div className="chatOnline" onClick={ (e) => handleClickChat(e) }>
      <div className="chatOnlineFriend">
        <div className="PhotoAndName">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://noticias.coches.com/wp-content/uploads/2011/10/cars.jpg"
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

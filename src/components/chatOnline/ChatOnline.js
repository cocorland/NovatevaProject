import "./ChatOnline.css";

export const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://avatars.githubusercontent.com/u/37028687?v=4"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <div className="nombreConexion">
          <span className="chatOnlineName">Orlando Chaparro </span>
          <span className="Conexion">Online</span>
        </div>
        <span className="typing">typing...</span>
        <p className="mensajesNoLeidos">15</p>
      </div>
    </div>
  )
}

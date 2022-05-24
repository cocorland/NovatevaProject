import "./CajaDeChat.css";

export const CajaDeChat = () => {
  return (
    <div className="chatBoxBottom">
      <textarea className="inputChatMessage" placeholder="Envía un mensaje..."></textarea>
      <div className="buttons">
        <button className="chatSubmitButton">Enviar</button>
        <button className="denunciaSubmitButton">Denunciar</button>
      </div>
    </div>
  )
}

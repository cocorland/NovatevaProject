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
        <span className="chatOnlineName">Orlando Chaparro </span>
      </div>
    </div>
  )
}

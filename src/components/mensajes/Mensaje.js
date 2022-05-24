import './Mensaje.css';

export const Mensaje = ({own}) => {
  return (
    <div className={ own ? "mensaje own" : "message" }>
      <div className="topMensaje">
        <img
          className="imagenMensaje"
          src="https://avatars.githubusercontent.com/u/37028687?v=4"
          alt=""
        />
        <p className='textoMensaje'>sdfsdfsdf</p>
      </div>
      <div className="bottomMensaje">Hace una hora</div>
    </div>
  );
}

import './Mensaje.css';

export const Mensaje = ({own}) => {
  return (
    <div className="mensaje own">
      <div className="topMensaje">
        <img
          className="imagenMensaje"
          src="https://avatars.githubusercontent.com/u/37028687?v=4"
          alt=""
        />
        <p className='textoMensaje'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem fuga molestias labore suscipit, optio quia animi dolore?</p>
      </div>
      <div className="bottomMensaje">Hace una hora</div>
    </div>
  );
}

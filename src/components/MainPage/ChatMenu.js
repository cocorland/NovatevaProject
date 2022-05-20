import React from 'react';
import Conversacion from '../conversaciones/Conversacion';
import './ChatMenu.css';

export const ChatMenu = () => {
  return (
    <>
      <input placeholder="Buscar amigos" className="chatMenuInput" />
      <Conversacion />
      <Conversacion />
      <Conversacion />
      <Conversacion />
      <Conversacion />
      <Conversacion />
    </>
  )
}

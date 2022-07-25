import { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
  /* Componente funcional, acceso a hooks. */
  const [formState, setFormState] = useState(
    {
      "firstName": "",
      "lastName": "",
      "type": "consumer",
      "email": "",
      "password": "",
      "id": "",
      "users": [],
      "token": "",
      "chats": [],
      "mensajes": [],
    },
  );

  return (
    /* Lo que esta dentro del value es lo que cualquier hijo podra ver en el context */
    <UserContext.Provider value={{ formState, setFormState }}>
      {children}
    </UserContext.Provider>
  )
}

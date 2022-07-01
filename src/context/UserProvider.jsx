import { useState } from 'react'
import { UserContext } from './UserContext'

/* const user = {
  "_id": "e528c52f32ec46429a855e07aacda1a6",
  "firstName": "Orlando",
  "lastName": "Chaparro",
  "type": "consumer",
  "email": "o@chaparro.com",
  "password": "$2b$04$kyH9wIQj94hhL2CHJ3OGIOG1I2p7GzDweZpYpxul8lO7maoyKhqMy",
  "createdAt": "2022-06-29T13:46:23.501Z",
  "updatedAt": "2022-06-29T13:46:23.501Z",
  "__v": 0
} */



export const UserProvider = ({ children }) => {
  /* Como este es un componente funcional, tenemos acceso a los hooks. */
  const [formState, setFormState] = useState({
    "firstName": "",
    "lastName": "",
    "type": "consumer",
    "email": "",
    "password": "",
  });

  return (
    /* Lo que esta dentro del value es lo que cualquier hijo podra ver en el context */
    <UserContext.Provider value={{ formState, setFormState }}>
        { children }
    </UserContext.Provider>
  )
}

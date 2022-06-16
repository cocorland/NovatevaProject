import { UserContext } from './UserContext'

const user = {
    id: 123,
    name: 'Orlando Chaparro Salazar',
    email: 'orlando@logrador.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        { children }
    </UserContext.Provider>
  )
}

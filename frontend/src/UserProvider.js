import {createContext, useState} from "react"

const UserContext = createContext()

export function UserProvider(props) {
  const [user, setUser] = useState(null)
  const value = {
     getUser:() => user,
     login:(name, password) => setUser({name: name, password: password}),
     logoff:() => setUser(null)
  }
  return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}

export default UserContext
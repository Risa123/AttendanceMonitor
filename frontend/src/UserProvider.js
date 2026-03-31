import {createContext} from "react";

const UserContext = createContext()

export function UserProvider(props) {
  const value = {}
  return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}

export default UserContext
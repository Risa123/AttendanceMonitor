import {createContext, useState} from "react"
import {post, get} from "./requestCommon"

const UserContext = createContext()

export function UserProvider(props) {
  const [user, setUser] = useState(null)
  const value = {
     getUser:() => user,
     login:async (name, password) => setUser(await post("user/login",{},name + ":" + password)),
     logoff:async() => {
       await post("user/logoff",{}, user)
       setUser(null)
     },
     listAtendees:async () => await get("user/listStudents",{})
  }
  return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}

export default UserContext
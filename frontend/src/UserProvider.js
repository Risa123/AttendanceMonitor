import {createContext, useState} from "react"
import {post, get, SERVER_ADDRESS, RequestException, OK, UNAUTHORISED } from "./requestCommon"

const UserContext = createContext()

export function UserProvider(props) {
  const [user, setUser] = useState(null)
  const value = {
     getUser:() => user,
     login:async (name, password) => {
       const request = await fetch(SERVER_ADDRESS + "user/login", {
            method:"POST",
            headers:{
              "Authorization":name + ":" + password
            }
       })
       if (request.status === UNAUTHORISED) {
         throw new InvalidCredentialsException("invalid credentials")
       } else  if (request.status !== OK) {
          throw new RequestException(await request.text())
       }
       setUser(await request.json())
     },
     logoff:async() => {
       await post("user/logoff",{}, user)
       setUser(null)
     },
     listAtendees:async () => user == null ? [] : await get("user/listAttendees", user)
  }
  return <UserContext.Provider value = {value}>{props.children}</UserContext.Provider>
}

export class InvalidCredentialsException extends Error {

}

export default UserContext
import {createContext, useContext} from "react"

import {get, post} from "../requestCommon"
import UserContext from "../UserProvider"

const CardReaderContext = createContext()


export function CardReaderProvider(props) {
    const UserProvider = useContext(UserContext)
    const value = {
        list: async () => {
           const user =  UserProvider.getUser() 
           return user == null ? [] : await get("cardReader/list", user)
        },
        add: async cardReader => await post("cardReader/add", cardReader, UserProvider.getUser())
    }
    return <CardReaderContext.Provider value = {value}>{props.children}</CardReaderContext.Provider>
}

export default CardReaderContext